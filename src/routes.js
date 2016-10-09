var _ = require('lodash');
var hbs  = require('hbs');
var studentRepository = require('../data/studentRepository');
var hbsHelpers  = require('./hbsHelpers');

module.exports = function() {
  const app = this;

  //HBS helpers
  hbsHelpers.register();

  //Home Page
  app.get('/', function (req, res) {
    res.redirect('group-work');
  });

  //Call-on Page
  app.get('/call-on', function (req, res) {
    app.locals.period = req.query.period;
    res.render('call-on');
  });
  app.post('/call-on', function (req, res) {
    var students = studentRepository.getByPeriod(req.body.period);
    var studentsCalled;
    var studentsCalledDisplay;
    var currentStudent;
    if(req.body.submit === 'reset') {
      studentsCalled = [];
    } else {
        studentsCalled = JSON.parse(req.body.studentsCalled || '[]');
        studentsCalledDisplay = _.clone(studentsCalled);
        students = _.pullAllWith(students, studentsCalled, _.isEqual);
        students = _.shuffle(students);
        currentStudent = students[0];
    }
    if(currentStudent !== undefined){ studentsCalled.unshift(currentStudent); }
    //Pass to template
    app.locals.period = req.body.period;
    app.locals.currentStudent = currentStudent;
    app.locals.studentsCalled = JSON.stringify(studentsCalled);
    app.locals.studentsCalledDisplay = studentsCalledDisplay;
    res.render('call-on');
  });

  //Group Page
  app.get('/group-work', function (req, res) {
    app.locals.period = req.query.period;
    app.locals.groupSize = req.query.groupSize;
    app.locals.students =
      _.shuffle(
        studentRepository.getByPeriod(req.query.period)
      );
    res.render('group-work');
  });
};

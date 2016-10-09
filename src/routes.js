var _ = require('lodash');
var hbs  = require('hbs');
var studentData = require('../data/students.json');
var hbsHelpers  = require('./hbsHelpers');

module.exports = function() {
  const app = this;

  //HBS helpers
  hbsHelpers.register();

  //Home Page
  app.get('/', function (req, res) {
    res.redirect('group-work');
  });

  //Group Page
  app.get('/group-work', function (req, res) {
    app.locals.period = req.query.period;
    app.locals.groupSize = req.query.groupSize;
    app.locals.students =
      _.shuffle(
        studentData.data
          .map(function(student) {
            student.lastName = student.lastName.substring(0,1) + '.';
            if(student.nickname !== '') {
              student.firstName = student.nickname;
            }
            return student;
          })
          .filter(function(student) {
            return student.period === parseInt(req.query.period);
          })
      );
    res.render('group-work');
  });
};

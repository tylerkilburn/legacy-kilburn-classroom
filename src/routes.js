var hbs  = require('hbs');

module.exports = function() {
  const app = this;

  // render home page
  //app.get('/', (req, res) => res.render('index'));

  function shuffle(array) {
      let counter = array.length;
      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }
      return array;
  }

  //Body Parser
  var bodyParser = require('body-parser');
  app.use(bodyParser.json() );       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));


  //Get Student Data
  var studentData = require('../data/students.json');

  var period = '';
  var groupSize = '';


  //HBS helpers
  hbs.registerHelper('student-group', function(context, options) {
    var ret = '';
    var studentGroupSize = groupSize;
    var isOpen = false;
    for(var i=0, j=context.length; i<j; i++) {
      if(i % studentGroupSize === 0) {
        ret = ret + '<div class="col-sm-3"><div class="well">';
        isOpen=true;
      }
      ret += options.fn(context[i]);
      ret += '<br />';
      if(i % studentGroupSize === studentGroupSize-1) { ret = ret + '</div></div>'; isOpen=false; }
    }
    if(isOpen) { ret = ret + '</div>'; }
    return ret;
  });

  //Ready Page
  app.get('/', function (req, res) {
    period = req.query.period;
    groupSize = req.query.groupSize;

    app.locals.period = period;
    app.locals.groupSize = groupSize;

    //Prep data
    hbs.localsAsTemplateData(app);
    app.locals.students =
      shuffle(
        studentData.data
          .map(function(student) {
            student.lastName = student.lastName.substring(0,1) + '.';
            if(student.nickname !== "")
              student.firstName = student.nickname;
            return student;
          })
          .filter(function(student) {
            return student.period == period;
          })
      );

    //Exclude partials
    res.render('index', {layout: false});
  });
  //Ready Page
  // app.get('/', function (req, res) {
  //   //Exclude partials
  //   res.render('index', {layout: false});
  // });

  // // render our list of messages retrieving them from our service
  // app.get('/message-list', (req, res, next) => {
  //   app.service('messages').find({}).then(result => {
  //     // This handles paginated and non-paginated services
  //     res.render('messages', { messages: result.data ? result.data : result });
  //   }).catch(next);
  // });


};

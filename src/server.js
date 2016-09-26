const SERVER_PORT = 3000;

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));


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
var studentData = require('./students.json');
// var fs = require('fs');
// var obj;
// fs.readFile('students.json', 'utf8', function (err, data) {
//   if (err) throw err;
//   obj = JSON.parse(data);
// });
//handlebars
var hbs  = require('hbs');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

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
          return student;
        })
        .filter(function(student) {
          return student.period == period;
        })
    );

  //Exclude partials
  res.render('index', {layout: false});
});

//Listen on port
app.listen(SERVER_PORT, function () {
  console.log('Server listening on port ' + SERVER_PORT + '!');
});

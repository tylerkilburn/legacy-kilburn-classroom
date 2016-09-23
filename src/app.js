var express = require('express');
var app = express();
//var path = require('path');

app.use(express.static(__dirname + '/public'));

//Pug
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index',
    {
      title: 'Mrs. Kilburn\'s Classroom',
      message: 'Mrs. Kilburn\'s Classroom',
    }
  );
});

//Listen on port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const errors = require('feathers-errors');
const errorHandler = require('feathers-errors/handler');

const middleware = require('./middleware');
const services = require('./services');

const routes = require('./routes');
const hbs = require('hbs');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  //.use('/', serveStatic( app.get('public') ))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(rest())
  .configure(hooks())
  .configure(routes)
  //.configure(services)
  //.configure(middleware)
  .use(errorHandler({
    // Using a custom error handler with our template engine
    html: function(error, req, res, next) {
      res.render('error', { error });
    }
  }));

app.set('view engine', 'hbs');

module.exports = app;

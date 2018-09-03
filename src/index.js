'use strict';

const app = require('./app');
const port = app.get('port');
const server = app.listen(process.env.PORT || 5000);

server.on('listening', () =>
  console.log(`Application started on http://${app.get('host')}:${port}`)
);

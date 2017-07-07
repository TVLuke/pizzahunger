'use strict';

var ip = require('ip');

var app = require('./app');

var port = process.env.PORT || 17799;

app.listen(port, function () {
  var host = app.address;

  console.log('Server running on port %d', port);
});

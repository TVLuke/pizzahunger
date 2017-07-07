'use strict';

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var path = require('path');

var models = require('../model/models');

var messages = require('./controllers/messages')(models);

var app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

cors({
  credentials: true,
  origin: true
});
app.use(cors()); // Support cross orgin requests

// Map routes to controller functions
app.get('/messages', messages.list);
app.post('/messages', messages.create);


// Export app object
module.exports = app;

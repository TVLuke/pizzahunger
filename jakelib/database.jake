'use strict';

var Sequelize = require('sequelize');
var models = require('../model/models');

var Promise = Sequelize.Promise;

var Message = models.Message;

namespace('db', function() {

  desc('Create tables');
  task('create', {async: true}, function() {
  console.log('Create tables');

    models.database.sync().then(complete);
  });

  desc('Drop database');
    task('drop', {async: true}, function() {
    console.log('Drop tables');

    Promise.each([Message], function(table) {
      return table.drop();
    }).then(complete);
  });
});

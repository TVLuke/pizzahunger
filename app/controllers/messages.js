'use strict';

var utils = require('./utils');

var trim = require('trim');
var Sequelize = require('sequelize');

module.exports = function(models) {

  var json_attributes = ['id', 'message', 'createdAt'];

  var messages = {};

  messages.list = function(req, res) {
     console.log("list Message");

     models.Message.findAll({
       attributes: json_attributes
     }).then(function(returnthings) {
       res.json(returnthings);
     }).catch(utils.handleError(res));
   };


   messages.create = function(req, res) {
     console.log("create Message");

     models.Message.create({
       message:             req.body.message,
     }).then(function(returnThing) {
       res.status(201).json(returnThing);
     }).catch(utils.handleError(res));
   };

   return messages;
 }

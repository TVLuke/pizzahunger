'use strict';

var database_db = process.env.PIZZA_DB_DB;
var database_user = process.env.PIZZA_DB_USER;
var database_psw = process.env.PIZZA_DB_PSW;

var Sequelize = require('sequelize');

if(database_db) {
  var database = exports.database = new Sequelize(database_db, database_user, database_psw);
} else {
  var database = exports.database = new Sequelize('sqlite://development.sqlite');
}

var Message = exports.Message = database.define('message',
  {
    id: {
     type: Sequelize.INTEGER(11),
     allowNull: false,
     primaryKey: true,
     autoIncrement: true,
    },
    message: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
     createdAt: 'createdAt',
     updatedAt: 'updatedAt',
});

'use strict';

// taco-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const taco = sequelize.define('tacos', {
    meat: {
      type: Sequelize.STRING,
      allowNull: true
    },
    cheese: {
      type: Sequelize.STRING,
      allowNull: true
    },
    salsa: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  {
    freezeTableName: true
  });

  taco.sync();

  return taco;
};

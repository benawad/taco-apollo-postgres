'use strict';

// secretBurrito-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const secretBurrito = sequelize.define('secretBurritos', {
    size: {
      type: Sequelize.STRING,
      allowNull: true
    },
    ownerId: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  }, {
    freezeTableName: true
  });

  secretBurrito.sync();

  return secretBurrito;
};

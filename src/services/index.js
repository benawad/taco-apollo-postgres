'use strict';
const viewer = require('./viewer');
const secretBurrito = require('./secretBurrito');
const taco = require('./taco');
const graphql = require('./graphql');
const authentication = require('./authentication');
const user = require('./user');
const Sequelize = require('sequelize');
module.exports = function() {
  const app = this;

  const sequelize = new Sequelize(app.get('postgres'), {
    dialect: 'postgres',
    logging: false
  });
  app.set('sequelize', sequelize);

  app.configure(authentication);
  app.configure(user);
  app.configure(taco);
  app.configure(secretBurrito);
  app.configure(viewer);
  app.configure(graphql);
};

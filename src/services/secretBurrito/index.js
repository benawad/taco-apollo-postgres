'use strict';

const service = require('feathers-sequelize');
const secretBurrito = require('./secretBurrito-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: secretBurrito(app.get('sequelize'))
  };

  // Initialize our service with any options it requires
  app.use('/secretBurritos', service(options));

  // Get our initialize service to that we can bind hooks
  const secretBurritoService = app.service('/secretBurritos');

  // Set up our before hooks
  secretBurritoService.before(hooks.before);

  // Set up our after hooks
  secretBurritoService.after(hooks.after);
};

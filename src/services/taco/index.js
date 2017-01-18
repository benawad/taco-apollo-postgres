'use strict';

const service = require('feathers-sequelize');
const taco = require('./taco-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: taco(app.get('sequelize'))
  };

  // Initialize our service with any options it requires
  app.use('/tacos', service(options));

  // Get our initialize service to that we can bind hooks
  const tacoService = app.service('/tacos');

  // Set up our before hooks
  tacoService.before(hooks.before);

  // Set up our after hooks
  tacoService.after(hooks.after);
};

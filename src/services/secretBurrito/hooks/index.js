'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [
    auth.restrictToOwner({ ownerField: 'ownerId' })
  ],
  create: [
    auth.associateCurrentUser({as: 'ownerId'})
  ],
  update: [
    auth.restrictToOwner({ ownerField: 'ownerId' })
  ],
  patch: [
    auth.restrictToOwner({ ownerField: 'ownerId' })
  ],
  remove: [
    auth.restrictToOwner({ ownerField: 'ownerId' })
  ]
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

import feathers from 'feathers-client';
import superagent from 'superagent';

export default function Resolvers() {
  let app = this;
  
  const Tacos = app.service('tacos');
  const Users = app.service('users');
  const SecretBurritos = app.service('secretBurritos');
  const Viewer = app.service('viewer');

  const base = `http://${app.get('host')}:${app.get('port')}`;
  const Auth = feathers()
    .configure(feathers.rest(base).superagent(superagent))
    .configure(feathers.hooks())
    .configure(feathers.authentication());

  return {
    User: {
      secretBurritos(user, args, context) {
        return SecretBurritos.find({
          query: {
            ownerId: user.id
          }
        });
      }
    },
    RootQuery: {
      allTacos(root, args, context) {
        return Tacos.find({});
      },
      tacos(root, { meat }, context) {
        return Tacos.find({
          query: {
            meat
          }
        });
      },
      taco(root, { id }, context) {
        return Tacos.get(id);
      },
      viewer(root, args, context) {
        return Viewer.find(context);
      }
    },
    RootMutation: {
      createTaco(root, data, context) {
        return Tacos.create(data, context);
      },
      signUp(root, args, context) {
        return Users.create(args);
      },
      loggin(root, { email, password }, context) {
        return Auth.authenticate({
          type: 'local',
          email,
          password
        });
      },
      createSecretBurrito(root, args, context) {
        return SecretBurritos.create(args, context);
      }
    }
  }
}

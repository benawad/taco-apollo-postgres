const typeDefinitions = `
type Taco {
  id: String
  meat: String
  cheese: String
  salsa: String
}
type User {
  id: String! 
  email: String!
  secretBurritos: [SecretBurrito]
}
type SecretBurrito {
  id: String
  size: String
}
type Authorized {
  token: String 
  data: User
}
type RootQuery {
  allTacos: [Taco]
  tacos(meat: String!): [Taco]
  taco(id: String!): Taco
  viewer: User
}
type RootMutation {
  createTaco (
    meat: String!
    cheese: String
    salsa: String
  ): Taco
  createSecretBurrito (
    size: String!
  ): SecretBurrito
  
  signUp (
    email: String!
    password: String!
  ): User
  loggin (
    email: String!
    password: String!
  ): Authorized
}
schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefinitions;

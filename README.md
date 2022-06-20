# taco-apollo-postgres

## Setup

Begin by cloning the repository:  
`git clone https://github.com/benawad/taco-apollo-postgres.git`

Setup npm and install the dependencies for the project:  
`npm install`

Create the database:  
`sudo -u postgres createdb tacodb`

The project uses ES6 Javascript features and requires `babel-node`:  
`npm install -g babel-cli`

Start up the server:  
`npm start`

To access the project navigate to:  
`http://localhost:3030/graphiql`

## Example Usage GraphiQL

Creating a User:
```
mutation {
  signUp(email: "test5", password: "test5") {
    id
  }
}
```

Logging In as a User:
```
mutation {
  loggin(email: "test5", password: "test5") {
    token
  }
}
```

Creating a Taco:
```
mutation {
  createTaco(meat: "chicken", cheese: "cheddar", salsa: "hot") {
    id
  }
}
```

## Authentication

Create Queries by sending POST requests to `http://localhost:3030/graphql`

To create/access `secretBurritos` add a JWT token to the body of the POST request which is received when logging in.

## Example Usage POST Requests

Create secretBurrito:
```
{
	"query": "mutation { createSecretBurrito(size: \"huge\") { id } }",
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNDg0NzY2NDk3LCJleHAiOjE0ODQ4NTI4OTcsImlzcyI6ImZlYXRoZXJzIn0.Yelj_wq0JJ8bQ-QwasVaX0qNef-9JK_79tvOY4A2suw"
}
```

Get all secretBurritos that user has created:
```
{
	"query": "{ viewer { id secretBurritos { size } } }",
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNDg0NzY1NzA5LCJleHAiOjE0ODQ4NTIxMDksImlzcyI6ImZlYXRoZXJzIn0.b6SCqZQD9PbaCQMslCpbQpGbm1GdwIdQarN3gUxRK-8"
}
```

Login and get all secretBurritos that user has created:
```
{
	"query": "mutation { loggin(email: \"test5\" password: \"test5\") { token data { secretBurritos { size } } } }"
}
```


# taco-apollo-postgres

## Setup

After cloning the repo, install the dependencies.

`npm install`

Create database

`sudo -u postgres createdb tacodb`

I use some of the new Javascript features, so you need `babel-node`

`npm install -g babel-cli`

Start up the server

`npm start`

You can access it at

`http://localhost:3030/graphiql`

## Example Usage GraphiQL

Create user

```
mutation {
  signUp(email: "test5", password: "test5") {
    id
  }
}
```

Login

```
mutation {
  loggin(email: "test5", password: "test5") {
    token
  }
}
```

Create taco

```
mutation {
  createTaco(meat: "chicken", cheese: "cheddar", salsa: "hot") {
    id
  }
}
```

## Authentication

You can make queries through POST requests to `http://localhost:3030/graphql`

To create/access `secretBurritos`, you need to add a JWT token to the body of your POST request which you get once you login.


## Example Usage POST Requests

Create secretBurrito

```
{
	"query": "mutation { createSecretBurrito(size: \"huge\") { id } }",
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNDg0NzY2NDk3LCJleHAiOjE0ODQ4NTI4OTcsImlzcyI6ImZlYXRoZXJzIn0.Yelj_wq0JJ8bQ-QwasVaX0qNef-9JK_79tvOY4A2suw"
}
```

Get all secretBurritos that user has created

```
{
	"query": "{ viewer { id secretBurritos { size } } }",
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNDg0NzY1NzA5LCJleHAiOjE0ODQ4NTIxMDksImlzcyI6ImZlYXRoZXJzIn0.b6SCqZQD9PbaCQMslCpbQpGbm1GdwIdQarN3gUxRK-8"
}
```

Login and get all secretBurritos that user has created

```
{
	"query": "mutation { loggin(email: \"test5\" password: \"test5\") { token data { secretBurritos { size } } } }"
}
```

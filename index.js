<<<<<<< Updated upstream
// const { ApolloServer, gql } = require("apollo-server");
=======
import './src'

const { ApolloServer, gql } = require("apollo-server");
>>>>>>> Stashed changes
// const crypto = require("crypto"); //crypto module comes from node.js

// const db = {
//   users: [
//     {
//       id: "1",
//       email: "judy@gmail.com",
//       name: "Judy",
//       avatarUrl: "https://gravatar.com/...",
//     },
//     {
//       id: "1",
//       email: "Bill@gmail.com",
//       name: "Bill",
//       avatarUrl: "https://gravatar.com/...",
//     },
//   ],
//   messages: [
//     { id: "1", userId: "1", body: "Hello", createdAt: Date.now() },
//     { id: "2", userId: "2", body: "Hi", createdAt: Date.now() },
//     { id: "3", userId: "1", body: "What's up?", createdAt: Date.now() },
//   ],
// };

// const typeDefs = gql`
//   type Query {
//     users: [User!]!  #object User cannot be null, as well as the list of users can not be null (User's array cannot hold any null values)
//     user(id: ID!): User #each User requires an id that's non-nullable
//     messages: [Message!]!
//   }
//   type Mutation {
//     addUser(email: String!, name: String!): User! #requires email and name to addUser
//   }
//   type User {
//     id: ID!
//     email: String!
//     name: String!
//     avatarUrl: String
//     messages: [Message!]!
//   }
//   type Message {
//     id: ID!
//     body: String!
//     createdAt: String!
//   }
// `;

// const resolvers = {
//   Query: {
//     users: () => db.users, //connect to mock database
//     user: (root, { id }) => db.users.find((user) => user.id === id), //find single user by the id,
//     messages: () => db.messages, //connect to mock database
//   },
//   Mutation: {
//     addUser: (root, { email, name }) => {
//       const user = {
//         id: crypto.randomBytes(10).toString("hex"), //generates a random encrypted hex string for the user's id
//         email,
//         name,
//       };
//       db.users.push(user);
//       return user;
//     },
//   },
//   User: {
//       messages: user =>db.messages.filter(message =>message.userId == user.id) //find messages by user Id
//   }
// };

// const server = new ApolloServer({typeDefs, resolvers}) //instantiates an http server with Express framework behind the scenes

// server.listen().then(({url}) => console.log(url))
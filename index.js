const {ApolloServer,gql} = require('apollo-server');
const crypto = require('crypto');

const db ={
    users:[
        {id:'1', email: 'judy@gmail.com', name: 'Judy', avatarUrl: 'https://gravatar.com/...' },
        {id:'1', email: 'Bill@gmail.com', name: 'Bill', avatarUrl: 'https://gravatar.com/...' },
    ],
    messages: [
        {id: '1', userId: '1', body: 'Hello', createdAt: Date.now()},
        {id: '2', userId: '2', body: 'Hi', createdAt: Date.now()},
        {id: '3', userId: '1', body: 'What\'s up?', createdAt: Date.now()},

    ]
}

const typeDefs = gql`
    type Query{
        users: [User!]!
        user(id: ID!): User
        messages: [Message!]!
    }
    `
import {ApolloServer} from 'apollo-server-express';
import express from 'express';
import typeDefs from './typeDefs/user';
import resolvers from './resolvers';

const {
    APP_PORT = 4000, 
    NODE_ENV ='development'
} = process.env

const IN_PROD = NODE_ENV === 'production' 

const app = express()

app.disable('x-powered-by') //disable one of the headers

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:!IN_PROD
})

server.applyMiddleware({app})

app.listen({port: 4000},()=>{
    console.log(`Server ready at http://localhost:${APP_PORT}${server.setGraphQLPath}`)
})
import {gql} from 'apollo-server-express';

export default gql`
extend type Query{
    user(id: ID!): User #may or may not return the User object
    users: [User!]! #returns an array of users that are non-nullable , as well as the User objects are non-nullable. Array either returns a list of non-nullable user objects or is empty 
}

extend type Mutation{
    signUp(email: String!, username: String!, name: String! ): User #User object might or might not be returned if the user has already been registered 
}

type User{
    id: ID!,
    email: String!
    username: String!
    name: String!
    createdAt: String!
}
`
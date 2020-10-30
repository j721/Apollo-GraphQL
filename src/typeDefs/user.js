import {gql} from 'apollo-server-express';

export default gql`
extend type Query{

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
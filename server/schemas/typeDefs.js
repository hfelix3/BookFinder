const typeDefs = `
type Query {
    users: [User]
    user(username: String!): User
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String], description: String!, title: String!, bookId: ID, image: String!): User
    removeBook(thoughtId: ID!, commentId: ID!): Thought
}

type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    // TODO: WHAT DO YOU PUT FOR IMAGE?
    image: String
    link: String
}

type Auth {
    token: Int
    user: User
}

`;

module.exports = typeDefs;
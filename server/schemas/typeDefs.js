const typeDefs = `
type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String], description: String!, title: String!, bookId: ID, image: String!, link: String!): User
    removeBook(bookId: ID!): User
}

type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
}
type Auth {
    token: String!
    user: User
}

`;

module.exports = typeDefs;
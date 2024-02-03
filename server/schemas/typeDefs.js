const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
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
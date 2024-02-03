const { Book, User } = require('../models');

const resolvers = {
  // TODO:createUser, getSingleUser, saveBook, deleteBook, login
  Query: {
    me: async () => {
      // use create or save to save a book? need delete a book.
      return Book.create({});
    },
    user: async (parent {_id}) => {
      const params = _id ? { _id} : {};
      return User.
    },
  },
  
  Mutaion: {
    // TODO:login: Accepts an email and password as parameters; returns an Auth type.

    login: async (parent, {email, password}) => {
      const params = {email, password};

       // Call authentication service
      const auth = await authService.login(params);

        // Return Auth type
      return {
        token: auth.token,
        user: {
          id: auth.userId,
          name: auth.name
        },
      },
    },

    // TODO:addUser: Accepts a username, email, and password as parameters; returns an Auth type.
    addUser: async () => {

    },

// TODO:saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)

    saveBook: async () => {

    },

// TODO:removeBook: Accepts a book's bookId as a parameter; returns a User type.
    removeBook: async () => {

    },

  },
};

module.exports = resolvers;

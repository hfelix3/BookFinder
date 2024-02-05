const { Book, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
 
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw AuthenticationError;
    },
  },
  
  Mutation: {
    // TODO:login: Accepts an email and password as parameters; returns an Auth type.

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },


    // TODO:addUser: Accepts a username, email, and password as parameters; returns an Auth type.
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    // TODO:saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)

    async saveBook(parent, body, { user }) {
      console.log(user);
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: body } },
          { new: true, runValidators: true }
        );
        return (updatedUser);
      } catch (err) {
        console.log(err);
        throw AuthenticationError;
      }
    },

    // TODO:removeBook: Accepts a book's bookId as a parameter; returns a User type.

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: bookId },
          {
            $pull: {
              savedBooks: { bookId: bookId }
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },

  },
}

module.exports = resolvers;

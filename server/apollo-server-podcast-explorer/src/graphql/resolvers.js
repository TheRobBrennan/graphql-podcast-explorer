// MongoDB
const { ObjectID } = require('mongodb');
const { connectionString } = require('../databases/mongodb');

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true });

// Models
const User = mongoose.model('user', { name: String });

// GraphQL schema implementation
module.exports = {
  Mutation: {
    createUser: async (_, { name }) => {
      const user = new User({ name });
      await user.save();
      return user;
    },
    // createBook: async (_, { title, author }) => {
    //   const [book] = await knex('book')
    //     .returning('*')
    //     .insert({ title, author });

    //   await User.updateOne(
    //     { _id: new ObjectID(author) },
    //     {
    //       $push: { bookIds: book.id },
    //     }
    //   );

    //   return book;
    // },
  },
  Query: {
    users: () => User.find(),
  },
  // User: {
  //   books: root => {
  //     return knex('book')
  //       .whereIn('id', root.bookIds)
  //       .select('*');
  //   },
  // },
};

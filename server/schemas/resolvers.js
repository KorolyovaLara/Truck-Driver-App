const { AuthenticationError } = require("apollo-server-express");
const { Profile } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    me: async (parent, args, context) => {
      console.log("Problem");
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError(
        "You need to be logged in! from Query in resolvers"
      );
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);
      return { token, profile };
    },

    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });
      if (!profile) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await profile.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    saveInfo: async (parent, { dataDriver }, context) => {
      if (context.user) {
        const updatedUser = await Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { driver: dataDriver } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError(
        "You need to be logged in! from Mutaion in resolvers - save Info"
      );
    },

    saveTruck: async (parent, { dataTruck }, context) => {
      if (context.user) {
        const updatedUser = await Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { trucks: dataTruck } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError(
        "You need to be logged in! from Query in resolvers - save Truck"
      );
    },

    deleteTruck: async (parent, { truckId }, context) => {
      if (context.user) {
        const updatedUser = await Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { trucks: { truckId: truckId } } },
          { new: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError(
        "You need to be logged in! from Mutaion in resolvers - Delete truck"
      );
    },
  },
};

module.exports = resolvers;

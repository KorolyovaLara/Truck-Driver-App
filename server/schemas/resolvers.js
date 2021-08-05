const { AuthenticationError } = require("apollo-server-express");
const { Profile, Truck, Driver } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find({}).populate("trucks").populate("driver");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError(
        "You need to be logged in! from Query in resolvers"
      );
    },
    driver: async (parent, { name }) => {
      return Profile.findOne({ name }).map("trucks");
    },
    trucks: async (parent, { name }) => {
      const params = name ? { name } : {};
      return Truck.find(params).sort();
    },

    allTrucks: async () => {
      return Truck.find();
    },
    allDrivers: async () => {
      return Driver.find();
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

    saveInfo: async (parent, dataDriver, context) => {
      console.log("datadriver", dataDriver);
      if (context.user) {
        const updatedUser = await Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { driver: dataDriver } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError(
        "You need to be logged in! from Mutaion in resolvers - save Info"
      );
    },

    saveTruck: async (parent, { rego, model, year }, context) => {
      if (context.user) {
        const newTruck = await Truck.create({
          rego,
          model,
          year,
          truckDriver: context.user.name,
        });

        await Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { trucks: newTruck._id } }
        );

        return newTruck;
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

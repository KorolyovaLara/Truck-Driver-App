const { AuthenticationError } = require("apollo-server-express");

const { Profile, Truck, Driver } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find({}).populate("trucks");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id }).populate("trucks");
      }
      throw new AuthenticationError(
        "You need to be logged in! from Query in resolvers"
      );
    },
    truck: async (parent, { truckId }) => {
      return Truck.findOne({ _id: truckId });
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

    saveInfo: async (parent, { dataDriver }, context) => {
      console.log("datadriver", dataDriver);
      if (context.user) {
        const profile = await Profile.findOne({ _id: context.user._id });
        if (profile) {
          let driverInfo;
          if (profile.driver) {
            driverInfo = await Driver.findOneAndUpdate(
              { _id: profile.driver },
              {
                ...dataDriver,
              }
            );

            return up;
          } else {
            driverInfo = await Driver.create({ ...dataDriver });
            await Profile.findOneAndUpdate(
              { _id: context.user._id },
              { driver: driverInfo._id }
            );
          }
          return driverInfo;
        }
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
        const truck = await Truck.findOneAndUpdate({ 
          _id: truckId,
          truckDriver: context.user.name
          });

          await Profile.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { trucks: truck._id  }},
          );
        return truck;
      }
      throw new AuthenticationError(
        "You need to be logged in! from Mutaion in resolvers - Delete truck"
      );
    },
  },

  Profile: {
    async driver(parent, args, ctx, info) {
      console.log(parent);
      return Driver.findOne({ _id: parent.driver });
    },
  },
};

module.exports = resolvers;

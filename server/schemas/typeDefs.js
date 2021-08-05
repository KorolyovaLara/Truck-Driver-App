const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    driver: DriverInfo
    trucks: [TruckInfo]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type DriverInfo {
    firstName: String
    lastName: String
    companyName: String
    phoneNumber: String
    driverLicence: String
  }

  type TruckInfo {
    _id: ID
    rego: String
    model: String
    year: String
  }

  input DriverInput {
    firstName: String
    lastName: String
    companyName: String
    phoneNumber: String
    driverLicence: String
  }

  input TruckInput {
    rego: String
    model: String
    year: String
  }

  type Query {
    profiles: [Profile]!
    me: Profile
    allTrucks: [TruckInfo]
    allDrivers: [DriverInfo]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveInfo(dataDriver: DriverInput): DriverInfo
    saveTruck(rego: String!, model: String!, year: String!): TruckInfo
    deleteTruck(truckId: String!): TruckInfo
  }
`;

module.exports = typeDefs;

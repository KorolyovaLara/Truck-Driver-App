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
    phoneNumber: Int
    driverLicence: Int
  }

  type TruckInfo {
    truckId: String
    rego: String
    model: String
    year: Int
  }

  input DriverInput {
    firstName: String
    lastName: String
    companyName: String
    phoneNumber: Int
    driverLicence: Int
  }

  input TruckInput {
    rego: String
    model: String
    year: Int
  }

  type Query {
    profiles: [Profile]!
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveInfo(dataDriver: DriverInput): Profile
    saveTruck(dataTruck: TruckInput): Profile
    deleteTruck(truckId: String!): Profile
  }
`;

module.exports = typeDefs;

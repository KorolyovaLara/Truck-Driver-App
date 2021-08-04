import gql from "graphql-tag";

export const QUERY_ME = gql`
  {
    me {
      _id
      name
      email
      driver {
        firstName
        lastName
        companyName
        phoneNumber
        driverLicence
      }
      trucks {
        truckId
        rego
        model
        year
      }
    }
  }
`;

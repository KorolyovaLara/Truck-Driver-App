import { gql } from "@apollo/client";

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
        _id
        rego
        model
        year
      }
    }
  }
`;

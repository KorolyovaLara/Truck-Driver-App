import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleUser($profileId: ID!) {
    user(profileId: $profileId) {
      _id
      name
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
    }
  }
`;

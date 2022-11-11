import { gql } from "@apollo/client/core";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      userType
      nickname
      point
    }
  }
`;

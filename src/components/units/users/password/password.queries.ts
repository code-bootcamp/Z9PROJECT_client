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

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($password: String!) {
    updatePassword(password: $password) {
      id
      nickname
    }
  }
`;

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
  mutation updatePassword($userId: String!, $password: String!) {
    updatePassword(userId: $userId, password: $password) {
      id
      nickname
    }
  }
`;

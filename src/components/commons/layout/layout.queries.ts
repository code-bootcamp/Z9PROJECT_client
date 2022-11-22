import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      userType
      nickname
      point
      profileImg
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
    }
  }
`;

export const SEARCH_CREATORS = gql`
  query searchCreators($word: String = "") {
    searchCreators(word: $word) {
      id
      userType
      nickname
    }
  }
`;

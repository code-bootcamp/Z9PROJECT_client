import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      userType
    }
  }
`;

export const FETCH_ORDER_BY_CREATOR = gql`
  query fetchOrdersByCreatorId($page: Float!) {
    fetchOrdersByCreatorId(page: $page) {
      id
    }
  }
`;

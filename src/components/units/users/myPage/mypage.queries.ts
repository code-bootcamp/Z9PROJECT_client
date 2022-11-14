import { gql } from "@apollo/client/core";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      phoneNumber
      address
      zipcode
      userType
      nickname
      point
    }
  }
`;

export const CREATE_PAYMENT = gql`
  mutation createPayment($impUid: String!, $amount: Float!) {
    createPayment(impUid: $impUid, amount: $amount) {
      id
      point {
        id
        point
        status
      }
    }
  }
`;

export const POINT_HISTORY_COUNT = gql`
  query fetchCountOfPointHistory($startDate: DateTime, $endDate: DateTime) {
    fetchCountOfPointHistory(startDate: $startDate, endDate: $endDate)
  }
`;

export const POINT_HISTORY = gql`
  query fetchPointHistory(
    $startDate: DateTime
    $endDate: DateTime
    $page: Float!
  ) {
    fetchPointHistory(startDate: $startDate, endDate: $endDate, page: $page) {
      id
      point
      status
      createdAt
    }
  }
`;

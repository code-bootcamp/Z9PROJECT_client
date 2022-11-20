import { gql } from "@apollo/client";

export const FETCH_ORDER_BY_CREATOR = gql`
  query fetchOrdersByCreatorId(
    $startDate: DateTime
    $endDate: DateTime
    $page: Int!
  ) {
    fetchOrdersByCreatorId(
      startDate: $startDate
      endDate: $endDate
      page: $page
    ) {
      id
      price
      quantity
      status
      createdAt
      updatedAt
      user {
        id
        nickname
      }
      product {
        id
        name
        user {
          id
          nickname
        }
      }
    }
  }
`;

export const FETCH_ORDER_BY_CREATOR_COUNT = gql`
  query fetchCountOfOrderByCreatorId($startDate: DateTime, $endDate: DateTime) {
    fetchCountOfOrderByCreatorId(startDate: $startDate, endDate: $endDate)
  }
`;

export const CANCEL_ORDER_ACCEPT = gql`
  mutation cancelOrderAccept($orderId: String!) {
    cancelOrderAccept(orderId: $orderId) {
      id
      price
      quantity
      status
      createdAt
      updatedAt
      user {
        id
        nickname
      }
      product {
        id
        name
        discountPrice
        user {
          id
          nickname
        }
      }
    }
  }
`;

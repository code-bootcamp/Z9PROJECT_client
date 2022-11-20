import { gql } from "@apollo/client";

export const FETCH_ORDER_BY_USER = gql`
  query fetchOrdersByUserId(
    $startDate: DateTime
    $endDate: DateTime
    $page: Int!
  ) {
    fetchOrdersByUserId(startDate: $startDate, endDate: $endDate, page: $page) {
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

export const FETCH_ORDER_BY_USER_COUNT = gql`
  query fetchCountOfOrderByUserId($startDate: DateTime, $endDate: DateTime) {
    fetchCountOfOrderByUserId(startDate: $startDate, endDate: $endDate)
  }
`;

export const CANCEL_ORDER_REFUND = gql`
  mutation cancelOrderRequest($orderId: String!) {
    cancelOrderRequest(orderId: $orderId) {
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

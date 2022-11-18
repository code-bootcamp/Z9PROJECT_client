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

export const FETCH_PRODUCTS_BY_CREATOR = gql`
  query fetchProductsByCreator($page: Int!) {
    fetchProductsByCreator(page: $page) {
      id
      name
      discountPrice
      user {
        nickname
      }
      createdAt
    }
  }
`;

export const FETCH_QUESTIONS = gql`
  query fetchQuestions($productId: String!, $page: Int!) {
    fetchQuestions(productId: $productId, page: $page) {
      id
      question
      status
      createdAt
      deletedAt
      user {
        id
        email
        userType
        nickname
        profileImg
        createdAt
        updatedAt
        deletedAt
      }
      product {
        id
      }
    }
  }
`;

export const FETCH_MY_QUESTIONS = gql`
  query fetchMyQuestions {
    fetchMyQuestions {
      id
      question
      status
      createdAt
      answer {
        id
        answer
      }
      product {
        id
        name
        user {
          id
          nickname
        }
      }
      user {
        id
        nickname
        profileImg
      }
    }
  }
`;

export const FETCH_COUNT_OF_QUESTIONS = gql`
  query fetchCountOfQuestions($productId: String!) {
    fetchCountOfQuestions(productId: $productId)
  }
`;

export const FETCH_PRODUCT_BY_CREATOR_COUNT = gql`
  query countProductByCreator {
    countProductByCreator
  }
`;

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

export const FETCH_COUNT_OF_QUESTIONS = gql`
  query fetchCountOfQuestions($productId: String!) {
    fetchCountOfQuestions(productId: $productId)
  }
`;

export const FETCH_PRODUCT_BY_CREATOR_COUNT = gql`
  query countProductByCreator {
    countProductByCreator
  }
`;

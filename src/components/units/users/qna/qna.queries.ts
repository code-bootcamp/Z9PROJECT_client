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
  query fetchQuestions($productId: String!) {
    fetchQuestions(productId: $productId) {
      id
      question
      status
      createdAt
      deletedAt
      # user {
      #   id
      #   email
      #   userType
      #   nickname
      #   createdAt
      #   updatedAt
      #   deletedAt
      # }
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
      }
    }
  }
`;

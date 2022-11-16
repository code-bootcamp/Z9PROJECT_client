import { gql } from "@apollo/client/core";

export const CREATE_QUESTION = gql`
  mutation createQuestion($createQuestionInput: CreateQuestionInput!) {
    createQuestion(createQuestionInput: $createQuestionInput) {
      id
      question
      status
      createdAt
      deletedAt
      product {
        id
        name
        originPrice
        quantity
        discountRate
        discountPrice
        isSoldout
        endType
        images
        option1
        option2
        option3
        option4
        option5
        createdAt
      }
      user {
        id
        email
        userType
        nickname
        createdAt
        profileImg
      }
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

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      userType
    }
  }
`;

export const UPDATE_QUESTION = gql`
  mutation updateQuestion(
    $questionId: String!
    $updateQuestionInput: UpdateQuestionInput!
  ) {
    updateQuestion(
      questionId: $questionId
      updateQuestionInput: $updateQuestionInput
    ) {
      id
      question
      createdAt
      # user {
      #   id
      #   email
      #   userType
      #   nickname
      #   createdAt
      # }
    }
  }
`;

export const DELETE_QUESTION = gql`
  mutation deleteQuestion($questionId: String!) {
    deleteQuestion(questionId: $questionId)
  }
`;

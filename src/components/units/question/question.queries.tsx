import { gql } from "@apollo/client/core";

export const CREATE_QUESTION = gql`
  mutation createQuestion($createQuestionInput: CreateQuestionInput!) {
    createQuestion(createQuestionInput: $createQuestionInput) {
      id
      question
      createdAt
      deletedAt
      isDeleted
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
      # user {
      #   id
      #   email
      #   userType
      #   nickname
      #   createdAt
      #   updatedAt
      #   deletedAt
      # }
    }
  }
`;

export const FETCH_QUESTIONS = gql`
  query fetchQuestions {
    fetchQuestions {
      id
      question
      createdAt
      deletedAt
      isDeleted
      # user {
      #   id
      #   email
      #   userType
      #   nickname
      #   createdAt
      #   updatedAt
      #   deletedAt
      # }
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
      deletedAt
      isDeleted
    }
  }
`;

export const DELETE_QUESTION = gql`
  mutation deleteQuestion($questionId: String!) {
    deleteQuestion(questionId: $questionId)
  }
`;

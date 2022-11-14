import { gql } from "@apollo/client";

export const CREATE_ANSWER = gql`
  mutation createAnswer(
    $questionId: String!
    $createAnswerInput: CreateAnswerInput!
  ) {
    createAnswer(
      questionId: $questionId
      createAnswerInput: $createAnswerInput
    ) {
      id
      answer
      createdAt
      question {
        id
        question
        createdAt
        status
      }
    }
  }
`;

export const FETCH_LOGIN_USER_ANSWER = gql`
  query fetchLoginUserAnswer($questionId: String!) {
    fetchLoginUserAnswer(questionId: $questionId) {
      id
      answer
      createdAt
      question {
        id
        question
        createdAt
        status
      }
    }
  }
`;

export const UPDATE_ANSWER = gql`
  mutation updateAnswer(
    $answerId: String!
    $updateAnswerInput: UpdateAnswerInput!
  ) {
    updateAnswer(answerId: $answerId, updateAnswerInput: $updateAnswerInput) {
      id
      answer
      createdAt
      question {
        id
        question
        createdAt
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $signupId: String!
    $createCommonUserInput: CreateCreatorInput!
  ) {
    createUser(
      signupId: $signupId
      createCommonUserInput: $CreateCommonUserInput
    ) {
      id
      nickname
      userType
    }
  }
`;

export const POST_SMS_TOKEN = gql`
  mutation postSmsToken($phoneNumber: String!) {
    postSmsToken(phoneNumber: $phoneNumber) {
      smsAuthTime
      message
    }
  }
`;

export const PATCH_SMS_TOKEN = gql`
  mutation patchSmsToken(
    $phoneNumber: String!
    $smsToken: String!
    $signupId: String!
  ) {
    patchSmsToken(
      phoneNumber: $phoneNumber
      smsToken: $smsToken
      signupId: $signupId
    )
  }
`;

export const CHECK_NICKNAME = gql`
  mutation checkNickname($nickname: String!) {
    checkNickname(nickname: $nickname)
  }
`;

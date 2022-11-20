import { gql } from "@apollo/client";

export const CREATE_CREATOR = gql`
  mutation createCreator(
    $signupId: String!
    $createCreatorInput: CreateCreatorInput!
  ) {
    createCreator(
      signupId: $signupId
      createCreatorInput: $createCreatorInput
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

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($image: Upload!) {
    uploadImage(image: $image) {
      id
      imageUrl
      createdAt
    }
  }
`;

import { gql } from "@apollo/client/core";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      userType
      nickname
      phoneNumber
      zipcode
      address
      addressDetail
      profileImg
      creatorAuthImg
      isAuthedCreator
      snsName
      snsChannel
      followerNumber
      mainContents
      introduce
      bank
      account
      accountName
      point
      createdAt
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userId: String!, $updateUserInput: UpdateUserInput!) {
    updateUser(userId: $userId, updateUserInput: $updateUserInput) {
      nickname
      phoneNumber
      zipcode
      address
      addressDetail
      profileImg
      creatorAuthImg
      snsName
      snsChannel
      mainContents
      introduce
      bank
      account
      accountName
      createdAt
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

export const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser
  }
`;

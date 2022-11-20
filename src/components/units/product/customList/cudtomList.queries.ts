import { gql } from "@apollo/client";

export const FETCH_CREATORS = gql`
  query fetchCreators($usersId: [String!]!) {
    fetchCreators(usersId: $usersId) {
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
      snsId
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
      updatedAt
      deletedAt
    }
  }
`;

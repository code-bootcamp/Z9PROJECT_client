import { gql } from "@apollo/client";

export const FETCH_PRODUCTS_BY_CREATORS = gql`
  query fetchProductsByCreator($page: Int!, $userId: String!) {
    fetchProductsByCreator(page: $page, userId: $userId) {
      id
      name
      originPrice
      quantity
      originalQuantity
      discountPrice
      discountRate
      isSoldout
      delivery
      endType
      validFrom
      validUntil
      images
      content
      option1
      option2
      option3
      option4
      option5
      youtubeLink
      shopName
      ceo
      brn
      mobn
      productDetail {
        id
        type
        option1
        option2
        option3
        option4
        option5
        option6
        option7
        option8
        option9
        option10
        option11
        option12
        option13
        option14
      }
      user {
        id
        userType
        nickname
        phoneNumber
        profileImg
        creatorAuthImg
        isAuthedCreator
        snsName
        snsChannel
        followerNumber
        mainContents
        introduce
        createdAt
      }
      skin
      textColor
      bgColor
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const SEARCH_CREATORS = gql`
  query searchCreators($word: String = "") {
    searchCreators(word: $word) {
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
    }
  }
`;

export const FETCH_CREATORS = gql`
  query fetchCreators {
    fetchCreators {
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
    }
  }
`;

export const FETCH_CREATORS_BY_SNS = gql`
  query fetchCreatorsBySnsType($snsType: SNS_TYPE_ENUM!) {
    fetchCreatorsBySnsType(snsType: $snsType) {
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
    }
  }
`;

import { gql } from "@apollo/client";

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
      id
      name
      originPrice
      quantity
      originalQuantity
      discountRate
      discountPrice
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
        createdAt
      }
      skin
      createdAt
      textColor
      bgColor
    }
  }
`;

export const LIKE_PRODUCT = gql`
  mutation likeProduct($productId: String!) {
    likeProduct(productId: $productId)
  }
`;

export const FETCH_IS_LIKED = gql`
  query fetchIsLiked($productId: String!) {
    fetchIsLiked(productId: $productId)
  }
`;

export const CREATE_ORDER = gql`
  mutation createOrder($productId: String!, $price: Float!, $quantity: Float!) {
    createOrder(productId: $productId, price: $price, quantity: $quantity) {
      id
      price
      quantity
      status
      createdAt
      updatedAt
      user {
        id
        nickname
        phoneNumber
        profileImg
        snsName
        snsChannel
        point
      }
    }
  }
`;

export const FETCH_SALES_TOTAL = gql`
  query fetchSalesTotal($productId: String!) {
    fetchSalesTotal(productId: $productId)
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: String!) {
    deleteProduct(productId: $productId)
  }
`;

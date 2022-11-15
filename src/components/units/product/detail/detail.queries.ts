import { gql } from "@apollo/client";

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: String!) {
    fetchProduct(productId: $productId) {
      id
      name
      originPrice
      quantity
      discountRate
      discountPrice
      isSoldout
      delivery
      endType
      validFrom
      validUntil
      images
      content
      youtubeLink
      shopName
      ceo
      brn
      mobn
      skin
      user {
        id
      }
      color
      createdAt
      option1
      option2
      option3
      option4
      option5
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

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

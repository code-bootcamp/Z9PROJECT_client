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
    }
  }
`;

export const LIKE_PRODUCT = gql`
  mutation likeProduct($productId: Float!) {
    likeProduct(productId: $productId)
  }
`;

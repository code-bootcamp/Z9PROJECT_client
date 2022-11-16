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
      }
      skin
      color
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

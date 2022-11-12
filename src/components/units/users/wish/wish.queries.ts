import { gql } from "@apollo/client";

export const FETCH_ALL_LIKES = gql`
  query fetchAllLikes {
    fetchAllLikes {
      id
      name
      originPrice
      quantity
      discountPrice
      discountRate
      isSoldout
      delivery
      endType
      validFrom
      validUntil
      shopName
      ceo
      brn
      mobn
      skin
      images
      user {
        id
        nickname
      }
    }
  }
`;

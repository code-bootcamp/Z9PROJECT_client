import { gql } from "@apollo/client";

// export const FETCH_PRODUCTS = gql`
//   query fetchProducts {
//     fetchProducts {
//       id
//       name
//       originPrice
//       quantity
//       discountRate
//       discountPrice
//       isSoldout
//       endType
//       images
//       youtubeLink
//       createdAt
//     }
//   }
// `;

export const FETCH_PRODUCTS_BY_PAGES = gql`
  query fetchProductsByPages($page: Int!) {
    fetchProductsByPages(page: $page) {
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
      createdAt
    }
  }
`;

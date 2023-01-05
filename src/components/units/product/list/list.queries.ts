import { gql } from "@apollo/client";

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

export const FETCH_PRODUCT_VIEW_COUNT = gql`
  query fetchProductViewCount($productId: String!) {
    fetchProductViewCount(productId: $productId)
  }
`;

export const FETCH_LIKE_COUNT = gql`
  query fetchLikeCount($productId: String!) {
    fetchLikeCount(productId: $productId)
  }
`;

export const COUNT_PRODUCT_BY_STATUS = gql`
  query countProductByStatus(
    $type: PRODUCT_SEARCH_TYPE!
    $option: PRODUCT_INCLUDE_OPTION!
  ) {
    countProductByStatus(type: $type, option: $option)
  }
`;

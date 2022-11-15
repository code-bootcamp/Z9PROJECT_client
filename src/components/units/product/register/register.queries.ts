import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $createProductInput: CreateProductInput!
    $createProductDetailInput: CreateProductDetailInput!
  ) {
    createProduct(
      createProductInput: $createProductInput
      createProductDetailInput: $createProductDetailInput
    ) {
      id
      name
      originPrice
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
      createdAt
      updatedAt
      deletedAt
      user {
        id
        userType
        nickname
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
      color
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
    }
  }
`;

export const UPLOAD_IMAGES = gql`
  mutation uploadImages($images: [Upload!]!) {
    uploadImages(images: $images) {
      id
      imageUrl
    }
  }
`;

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $productId: String
    $updateProductInput: UpdateProductInput!
    $updateProductDetailInput: UpdateProductDetailInput!
  ) {
    updateProduct(
      productId: $productId
      updateProductInput: $updateProductInput
      updateProductDetailInput: $updateProductDetailInput
    ) {
      id
      name
    }
  }
`;

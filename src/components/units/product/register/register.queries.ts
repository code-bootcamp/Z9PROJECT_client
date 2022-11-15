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

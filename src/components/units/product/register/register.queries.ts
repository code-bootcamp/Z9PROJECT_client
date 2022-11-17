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
      skin
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
    $productId: String!
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

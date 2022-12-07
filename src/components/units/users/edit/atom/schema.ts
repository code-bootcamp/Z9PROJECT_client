import * as yup from "yup";

export const schema = yup.object({
  nickname: yup.string(),
  phoneNumber: yup.string(),
  keyNumber: yup.string(),
  zipcode: yup.string(),
  address: yup.string(),
  addressDetail: yup.string(),
  snsId: yup.string(),
  snsChannel: yup.string(),
  mainContents: yup.string(),
  introduce: yup.string(),
  account: yup.string(),
  bank: yup.string(),
  accountName: yup.string(),
});

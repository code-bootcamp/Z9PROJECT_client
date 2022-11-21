import * as yup from "yup";

export const schema = yup.object({
  email: yup.string().email("이메일 형식 확인").required("필수"),
  password: yup.string().required("필수"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 같지 않습니다.")
    .required("필수"),
  phoneNumber: yup.string().required("필수"),
  keyNumber: yup.string().required("필수"),
  zipcode: yup.string().required("필수"),
  address: yup.string().required("필수"),
  addressDetail: yup.string(),
  nickname: yup.string().required("필수"),
  snsId: yup.string().required("필수"),
  snsChannel: yup.string().required("필수"),
  mainContents: yup.string(),
  introduce: yup.string(),
  account: yup.number().typeError("숫자만 입력").required("필수"),
  bank: yup.string().required("필수"),
  accountName: yup.string().required("필수"),
  terms: yup.boolean().oneOf([true], "필수"),
});

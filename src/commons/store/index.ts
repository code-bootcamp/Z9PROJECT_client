import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const hamburgerState = atom({
  key: "hamburgerState",
  default: false,
});

import { atom } from "recoil";

export const hamburgerState = atom({
  key: "hamburgerState",
  default: false,
});

export const closeState = atom({
  key: "closeState",
  default: false,
});

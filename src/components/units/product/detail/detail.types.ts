import { MouseEvent } from "react";

export type IDetailPresenterProps = {
  handleChange: (value: string) => void;
  onClickCount: (e: MouseEvent<HTMLButtonElement>) => void;
  count: number;
  onClickCart: () => void;
  cart: boolean;
};

import { MouseEvent } from "react";

export type IDetailPresenterProps = {
  handleChange?: (value: unknown) => void;
  onClickCount?: (e: MouseEvent<HTMLButtonElement>) => void;
  count: number;
  onClickCart?: () => void;
  cart: boolean;
  data?: any;
  discount?: number;
  onClickLike?: (productId: any) => Promise<void>;
};

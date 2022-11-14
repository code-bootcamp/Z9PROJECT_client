import { MouseEvent } from "react";

export type IDetailPresenterProps = {
  handleChange?: ((value: any) => void) | undefined;
  onClickCount?: (e: MouseEvent<HTMLButtonElement>) => void;
  count: number;
  cart: boolean;
  data?: any;
  discount?: number;
  onClickLike?: (productId: any) => Promise<void>;
  thumbnail?: any;
  onClickImages?: any;
  onClickAnswer?: () => void;
  isTrue?: boolean;
};

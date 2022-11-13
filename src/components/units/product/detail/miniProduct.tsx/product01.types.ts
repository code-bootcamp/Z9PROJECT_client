import { MouseEvent } from "react";

export type IProduct01Props = {
  onClickCount?: (e: MouseEvent<HTMLButtonElement>) => void;
  count: number;
  cart: boolean;
  data?: any;
  discount?: number;
  onClickLike: (productId: any) => Promise<void>;
};

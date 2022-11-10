import { Dispatch, SetStateAction } from "react";

export type IMainPresenterProps = {
  handleLeftClick: () => void;
  handleRightClick: () => void;
  setSwiperRef: Dispatch<SetStateAction<undefined>>;
};

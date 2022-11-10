import * as S from "./main.styles";
import { IMainPresenterProps } from "./main.types";
import { useInView } from "react-intersection-observer";
import MainFirst from "./mainFirst";
import MainSecond from "./mainSecond";

export default function MainPresenter(P: IMainPresenterProps) {
  const { handleLeftClick, handleRightClick, setSwiperRef } = P;

  return (
    <>
      <S.Container className="scroll-controller">
        <MainFirst />
        <MainSecond
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
          setSwiperRef={setSwiperRef}
        />
      </S.Container>
    </>
  );
}

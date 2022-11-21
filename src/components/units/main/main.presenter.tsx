import * as S from "./main.styles";
import { IMainPresenterProps } from "./main.types";
import MainFirst from "./mainFirst";
import MainSecond from "./mainSecond";

export default function MainPresenter(P: IMainPresenterProps) {
  const { handleLeftClick, handleRightClick, setSwiperRef, data } = P;

  return (
    <>
      <S.Container className="scroll-controller">
        <MainFirst />
        <MainSecond
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
          setSwiperRef={setSwiperRef}
          data={data}
        />
      </S.Container>
    </>
  );
}

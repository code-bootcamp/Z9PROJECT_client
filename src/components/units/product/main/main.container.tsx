import MainPresenter from "./main.presenter";
import { useCallback, useState } from "react";

export default function MainContainer() {
  const [swiperRef, setSwiperRef] = useState();

  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);

  return (
    <>
      <MainPresenter
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
        setSwiperRef={setSwiperRef}
      />
    </>
  );
}

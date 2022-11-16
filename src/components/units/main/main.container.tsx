import { useCallback, useState } from "react";
import MainPresenter from "./main.presenter";

export default function MainContainer() {
  const [swiperRef, setSwiperRef] = useState<any>();

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

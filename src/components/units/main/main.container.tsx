import { useQuery } from "@apollo/client";
import { useCallback, useState } from "react";
import MainPresenter from "./main.presenter";
import { FETCH_PRODUCTS_BY_PAGES } from "./main.querise";

export default function MainContainer() {
  const [swiperRef, setSwiperRef] = useState<any>();

  const { data } = useQuery(FETCH_PRODUCTS_BY_PAGES, {
    variables: { page: 1 },
  });

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
        data={data}
      />
    </>
  );
}

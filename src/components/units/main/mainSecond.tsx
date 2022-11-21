import * as S from "./main.styles";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useInView } from "react-intersection-observer";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "animate.css";
import { IMainPresenterProps } from "./main.types";
import Timer from "../../commons/hooks/timerMain";
import { useMoveToPage } from "../../commons/hooks/useMoveToPage";
import FooterPage from "../../commons/layout/footer";

export default function MainSecond(P: IMainPresenterProps) {
  const { handleLeftClick, handleRightClick, setSwiperRef, data } = P;
  const { onClickMoveToPage } = useMoveToPage();

  const [ref] = useInView({
    threshold: 0,
  });

  return (
    <>
      <S.FullPage ref={ref}>
        <S.Message1 src="/img_main.png" alt="일러스트 이미지" />
        <S.Message2 src="/img_intro2.png" alt="일러스트 이미지" />
        <S.Message3 src="/icon_emoticon.png" alt="일러스트 이미지" />
        <S.Message4 src="/icon_like.png" alt="일러스트 이미지" />
        <S.Message5 src="/img_product.png" alt="일러스트 이미지" />
        <S.FlexWrap>
          <S.Div></S.Div>
        </S.FlexWrap>
        <S.Left onClick={handleLeftClick} />
        <S.Product>
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
              enabled: false,
            }}
            navigation={true}
            onSwiper={setSwiperRef}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {data?.fetchProductsByPages.map((el: any) => (
              <SwiperSlide
                className="swiperSlide"
                key={el.id}
                onClick={onClickMoveToPage(`/product/${String(el.id)}`)}
                style={{ cursor: " pointer " }}
              >
                <S.Sale>{el?.discountRate}%</S.Sale>
                <S.ProductImg>
                  <img
                    src={el.images ? el.images[0] : "/icon_logo.png"}
                    alt="상품 이미지"
                  />
                </S.ProductImg>
                <S.ProductText>
                  <S.H2>
                    남은시간 {``}
                    <ClockCircleOutlined />
                  </S.H2>
                  <time>
                    <Timer el={el} />
                  </time>
                  <S.ProductName>
                    [{el.quantity}개 한정] {el.name}
                  </S.ProductName>
                  <S.PriceSale>{el.originPrice.toLocaleString()}원</S.PriceSale>
                  <S.Price>{el.discountPrice.toLocaleString()}원</S.Price>
                </S.ProductText>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.Product>
        <S.Right onClick={handleRightClick} />
      </S.FullPage>
      <S.Mobile>
        <FooterPage />
      </S.Mobile>
    </>
  );
}

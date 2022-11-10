import * as S from "./main.styles";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useInView } from "react-intersection-observer";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "animate.css";
import { IMainPresenterProps } from "./main.types";

export default function MainSecond(P: IMainPresenterProps) {
  const { handleLeftClick, handleRightClick, setSwiperRef } = P;

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <>
      <S.FullPage ref={ref}>
        <S.Message1 src="img_intro.wepb" alt="일러스트 이미지" />
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
            <SwiperSlide className="swiperSlide">
              <S.Sale>30%</S.Sale>
              <S.ProductImg>
                <img src="/test.jpeg" alt="최근 상품 이미지" />
              </S.ProductImg>
              <S.ProductText>
                <S.H2>
                  남은시간 {``}
                  <ClockCircleOutlined />
                </S.H2>
                <time>3일 00:43:23</time>
                <S.ProductName>
                  [300개 한정] 애플 에어팟 맥스 실버
                </S.ProductName>
                <S.PriceSale>1,000,000원</S.PriceSale>
                <S.Price>700,000원</S.Price>
              </S.ProductText>
            </SwiperSlide>

            <SwiperSlide className="swiperSlide">
              <S.Sale>30%</S.Sale>
              <S.ProductImg>
                <img src="/test.jpeg" alt="최근 상품 이미지" />
              </S.ProductImg>
              <S.ProductText>
                <S.H2>
                  남은시간 {``}
                  <ClockCircleOutlined />
                </S.H2>
                <time>3일 00:43:23</time>
                <S.ProductName>
                  [300개 한정] 애플 에어팟 맥스 실버
                </S.ProductName>
                <S.PriceSale>1,000,000원</S.PriceSale>
                <S.Price>700,000원</S.Price>
              </S.ProductText>
            </SwiperSlide>

            <SwiperSlide className="swiperSlide">
              <S.Sale>30%</S.Sale>
              <S.ProductImg>
                <img src="/test.jpeg" alt="최근 상품 이미지" />
              </S.ProductImg>
              <S.ProductText>
                <S.H2>
                  남은시간 {``}
                  <ClockCircleOutlined />
                </S.H2>
                <time>3일 00:43:23</time>
                <S.ProductName>
                  [300개 한정] 애플 에어팟 맥스 실버
                </S.ProductName>
                <S.PriceSale>1,000,000원</S.PriceSale>
                <S.Price>700,000원</S.Price>
              </S.ProductText>
            </SwiperSlide>
          </Swiper>
        </S.Product>
        <S.Right onClick={handleRightClick} />
      </S.FullPage>
    </>
  );
}

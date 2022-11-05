import * as S from "./main.styles";
import { SectionsContainer, Section } from "react-fullpage";
import { ClockCircleOutlined } from "@ant-design/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";

import "animate.css";
import { useCallback, useState } from "react";

export default function MainPage() {
  const [swiperRef, setSwiperRef] = useState();

  let options = {
    anchors: ["1", "2"],
  };

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
      <S.Container>
        <SectionsContainer {...options}>
          <Section>
            <S.ScrollPage>
              <S.LeftSection>
                <div>
                  <S.H1 className="animate__animated animate__backInLeft">
                    크리에이터들을 위한
                    <br />
                    ZERO NINE
                    <br />
                    <S.Span>
                      내가 좋아하는 크리에이터가 진행하는 공동구매
                      <br />
                      지금 바로 시작하세요!
                    </S.Span>
                  </S.H1>
                </div>
              </S.LeftSection>
              <S.RightSection>
                <S.Main>
                  <S.Img
                    src="/img_main1.png"
                    alt="메인이미지1"
                    className="animate__animated animate__backInRight"
                  />
                  <S.Linear
                    src="/icon_linear.png"
                    alt="Z9PICK EVERYONEBUYINCIT"
                  />
                </S.Main>
              </S.RightSection>
            </S.ScrollPage>
            <S.ScrollDown>
              <p>Scroll Down</p>
              <S.Scroll>
                <span className="scroll-dot"></span>
              </S.Scroll>
              <S.ArrowDown></S.ArrowDown>
            </S.ScrollDown>
          </Section>

          <Section>
            <S.Message1 src="/img_intro.png" alt="일러스트 이미지" />
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
          </Section>
        </SectionsContainer>
      </S.Container>
    </>
  );
}

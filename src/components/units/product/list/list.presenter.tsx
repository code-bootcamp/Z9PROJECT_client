import { HeartOutlined } from "@ant-design/icons";
import Search from "antd/lib/transfer/search";
import { useState } from "react";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import * as S from "./list.styles";

export default function ProductListPresenter() {
  const { onClickMoveToPage } = useMoveToPage();
  const [tab, setTab] = useState("1");

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
  };

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.H1>리스트</S.H1>
          <S.SearchBox tab={tab}>
            <ul>
              <li id="1" onClick={onClickTab}>
                전체
              </li>
              <li id="2" onClick={onClickTab}>
                진행예정
              </li>
              <li id="3" onClick={onClickTab}>
                진행중
              </li>
              <li id="4" onClick={onClickTab}>
                종료
              </li>
            </ul>
            <Search placeholder="검색어를 입력해주세요." />
          </S.SearchBox>
          <S.Main>
            <S.Section onClick={onClickMoveToPage("/product/useditemId")}>
              <S.New src="/icon_new.png" alt="NEW 아이콘" />
              <S.User>
                <img src="/img_user.jpeg" alt="크리에이터 이미지" />
                <S.UserName>creator name</S.UserName>
              </S.User>

              <S.ProdImg>
                <S.BgLayer className="bg_layer">
                  <S.H2>진행예정</S.H2>
                </S.BgLayer>
                <img className="prodImg" src="/test.webp" alt="상품 이미지" />
                <S.PriceSale>30%</S.PriceSale>
              </S.ProdImg>

              <S.Bottom>
                <S.Ul>
                  <li>
                    <S.View />
                    <span>100</span>
                    <HeartOutlined />
                    <span>100</span>
                  </li>
                  <S.Time>3일 00:43:44</S.Time>
                </S.Ul>
                <S.ProdName>[300개 한정] 애플 에어팟 맥스 실버</S.ProdName>
                <S.Price>
                  <span>1,000,000원</span>500,000원
                </S.Price>
              </S.Bottom>
            </S.Section>
            <S.Section onClick={onClickMoveToPage("/product/useditemId")}>
              <S.User>
                <img src="/img_user.jpeg" alt="크리에이터 이미지" />
                <S.UserName>creator name</S.UserName>
              </S.User>

              <S.ProdImg>
                <S.BgLayer className="bg_layer"></S.BgLayer>
                <img className="prodImg" src="/test.webp" alt="상품 이미지" />
                <S.PriceSale>30%</S.PriceSale>
              </S.ProdImg>

              <S.Bottom>
                <S.Ul>
                  <li>
                    <S.View />
                    <span>100</span>
                    <HeartOutlined />
                    <span>100</span>
                  </li>
                  <S.Time>3일 00:43:44</S.Time>
                </S.Ul>
                <S.ProdName>[300개 한정] 애플 에어팟 맥스 실버</S.ProdName>
                <S.Price>
                  <span>1,000,000원</span>500,000원
                </S.Price>
              </S.Bottom>
            </S.Section>
            <S.Section onClick={onClickMoveToPage("/product/useditemId")}>
              <S.User>
                <img src="/img_user.jpeg" alt="크리에이터 이미지" />
                <S.UserName>creator name</S.UserName>
              </S.User>

              <S.ProdImg>
                <S.BgLayer className="bg_layer"></S.BgLayer>
                <img className="prodImg" src="/test.webp" alt="상품 이미지" />
                <S.PriceSale>30%</S.PriceSale>
              </S.ProdImg>

              <S.Bottom>
                <S.Ul>
                  <li>
                    <S.View />
                    <span>100</span>
                    <HeartOutlined />
                    <span>100</span>
                  </li>
                  <S.Time>3일 00:43:44</S.Time>
                </S.Ul>
                <S.ProdName>[300개 한정] 애플 에어팟 맥스 실버</S.ProdName>
                <S.Price>
                  <span>1,000,000원</span>500,000원
                </S.Price>
              </S.Bottom>
            </S.Section>

            <S.Section onClick={onClickMoveToPage("/product/useditemId")}>
              <S.User>
                <img src="/img_user.jpeg" alt="크리에이터 이미지" />
                <S.UserName>creator name</S.UserName>
              </S.User>

              <S.ProdImg>
                <S.BgLayer className="bg_layer"></S.BgLayer>
                <img className="prodImg" src="/test.webp" alt="상품 이미지" />
                <S.PriceSale>30%</S.PriceSale>
              </S.ProdImg>

              <S.Bottom>
                <S.Ul>
                  <li>
                    <S.View />
                    <span>100</span>
                    <HeartOutlined />
                    <span>100</span>
                  </li>
                  <S.Time>3일 00:43:44</S.Time>
                </S.Ul>
                <S.ProdName>[300개 한정] 애플 에어팟 맥스 실버</S.ProdName>
                <S.Price>
                  <span>1,000,000원</span>500,000원
                </S.Price>
              </S.Bottom>
            </S.Section>
          </S.Main>
        </S.Wrapper>
      </S.Container>
    </>
  );
}

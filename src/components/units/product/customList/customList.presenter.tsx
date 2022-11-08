import {
  InstagramOutlined,
  SearchOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import * as S from "./customList.styles";

export default function CustomListPresenter() {
  return (
    <>
      <S.Container>
        <S.Top>
          <S.Square>
            <S.Animantion></S.Animantion>
            <S.Animantion></S.Animantion>
            <S.Animantion></S.Animantion>
            <S.ContentRanding>
              <S.H2>
                내가 좋아하는 <strong>크리에이터</strong>를 검색해보세요 !
              </S.H2>
              <S.Contents>
                Z9에 있는 크리에이터도 검색해보고 내가 원하는 크리에이터가
                없다면 ?? 검색으로 불러올 수 있습니다.
              </S.Contents>
              <S.Link>Go Search</S.Link>
            </S.ContentRanding>
          </S.Square>
          <img src="/icon_megaphone.png" alt="메가폰 아이콘" />
          <S.SkewBg></S.SkewBg>

          <S.Text className="pc">
            <S.H1>
              Z9의 크리에이터 <span></span>
            </S.H1>
            <S.H3>
              Z9의 크리에이터 <span></span>
            </S.H3>

            <S.Ul>
              <li>
                <YoutubeOutlined />
                유튜브
                <InstagramOutlined />
                인스타그램
              </li>
              <li>
                <S.Input type="text" placeholder="크리에이터 검색" />
                <S.Search>
                  <SearchOutlined />
                </S.Search>
              </li>
            </S.Ul>
          </S.Text>
        </S.Top>

        <S.Bottom>
          <S.Text className="mobile">
            <S.H1>
              Z9의 크리에이터 <span></span>
            </S.H1>
            <S.H3>
              Z9의 크리에이터 <span></span>
            </S.H3>

            <S.Ul>
              <li>
                <YoutubeOutlined />
                유튜브
                <InstagramOutlined />
                인스타그램
              </li>
              <li>
                <S.Input type="text" placeholder="크리에이터 검색" />
                <S.Search>
                  <SearchOutlined />
                </S.Search>
              </li>
            </S.Ul>
          </S.Text>

          <S.ImgWrapper>
            <S.ImgBox>
              <S.Octagon>
                <S.BgLayer className="bg_layer">누적 판매상품 0개</S.BgLayer>
              </S.Octagon>
              <S.Name>
                레오제이
                <span>
                  <YoutubeOutlined /> 102K
                </span>
              </S.Name>
            </S.ImgBox>

            <S.ImgBox>
              <S.Octagon>
                <S.BgLayer className="bg_layer">누적 판매상품 0개</S.BgLayer>
              </S.Octagon>
              <S.Name>
                레오제이
                <span>
                  <YoutubeOutlined /> 102K
                </span>
              </S.Name>
            </S.ImgBox>

            <S.ImgBox>
              <S.Octagon>
                <S.BgLayer className="bg_layer">누적 판매상품 0개</S.BgLayer>
              </S.Octagon>
              <S.Name>
                레오제이
                <span>
                  <YoutubeOutlined /> 102K
                </span>
              </S.Name>
            </S.ImgBox>

            <S.ImgBox>
              <S.Octagon>
                <S.BgLayer className="bg_layer">누적 판매상품 0개</S.BgLayer>
              </S.Octagon>
              <S.Name>
                레오제이
                <span>
                  <YoutubeOutlined /> 102K
                </span>
              </S.Name>
            </S.ImgBox>

            <S.ImgBox>
              <S.Octagon>
                <S.BgLayer className="bg_layer">누적 판매상품 0개</S.BgLayer>
              </S.Octagon>
              <S.Name>
                레오제이
                <span>
                  <YoutubeOutlined /> 102K
                </span>
              </S.Name>
            </S.ImgBox>

            <S.ImgBox>
              <S.Octagon>
                <S.BgLayer className="bg_layer">누적 판매상품 0개</S.BgLayer>
              </S.Octagon>
              <S.Name>
                레오제이
                <span>
                  <YoutubeOutlined /> 102K
                </span>
              </S.Name>
            </S.ImgBox>

            <S.ImgBox>
              <S.Octagon>
                <S.BgLayer className="bg_layer">누적 판매상품 0개</S.BgLayer>
              </S.Octagon>
              <S.Name>
                레오제이
                <span>
                  <YoutubeOutlined /> 102K
                </span>
              </S.Name>
            </S.ImgBox>

            <S.ImgBox>
              <S.Octagon>
                <S.BgLayer className="bg_layer">누적 판매상품 0개</S.BgLayer>
              </S.Octagon>
              <S.Name>
                레오제이
                <span>
                  <YoutubeOutlined /> 102K
                </span>
              </S.Name>
            </S.ImgBox>

            <S.ImgBox>
              <S.Octagon>
                <S.BgLayer className="bg_layer">누적 판매상품 0개</S.BgLayer>
              </S.Octagon>
              <S.Name>
                레오제이
                <span>
                  <YoutubeOutlined /> 102K
                </span>
              </S.Name>
            </S.ImgBox>

            <S.ImgBox>
              <S.Octagon>
                <S.BgLayer className="bg_layer">누적 판매상품 0개</S.BgLayer>
              </S.Octagon>
              <S.Name>
                레오제이
                <span>
                  <YoutubeOutlined /> 102K
                </span>
              </S.Name>
            </S.ImgBox>

            <S.ImgBox>
              <S.Octagon>
                <S.BgLayer className="bg_layer">누적 판매상품 0개</S.BgLayer>
              </S.Octagon>
              <S.Name>
                레오제이
                <span>
                  <YoutubeOutlined /> 102K
                </span>
              </S.Name>
            </S.ImgBox>
          </S.ImgWrapper>
        </S.Bottom>
      </S.Container>
    </>
  );
}

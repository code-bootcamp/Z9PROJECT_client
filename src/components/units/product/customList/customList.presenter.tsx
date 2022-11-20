import {
  InstagramOutlined,
  SearchOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import * as S from "./customList.styles";
import "animate.css";
import CreatorsModal from "../../../commons/modal/creatorsModal";

export default function CustomListPresenter(P: any) {
  const {
    onChangeInput,
    searchData,
    allCreatorData,
    onClickTab,
    tab,
    optionalData,
    onLoadMore,
    onClickList,
    list,
    setList,
  } = P;

  const thisiscomponent = (el: any) => {
    return (
      <S.ImgBox key={el.id}>
        {list && <CreatorsModal el={el} setList={setList} />}
        <S.Octagon
          style={{
            backgroundImage: `url(${String(el.creatorAuthImg)})`,
          }}
        >
          <S.BgLayer className="bg_layer" onClick={onClickList}>
            해당 크리에이터 상품 보러가기
          </S.BgLayer>
        </S.Octagon>
        <S.Name>
          {el.nickname ? el.nickname : el.snsName}
          <span>
            {el.snsChannel === "YOUTUBE" ? (
              <YoutubeOutlined />
            ) : (
              <InstagramOutlined />
            )}{" "}
            {el?.followerNumber}
          </span>
        </S.Name>
      </S.ImgBox>
    );
  };

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
                Zero9에 있는 <strong>크리에이터</strong>를 검색해보세요 !
              </S.H2>
              <S.Contents>
                크리에이터들의 판매목록을 확인하실 수 있습니다.
              </S.Contents>
              <S.Link>Go Go</S.Link>
            </S.ContentRanding>
          </S.Square>
          <img
            src="/icon_megaphone.png"
            alt="메가폰 아이콘"
            className="animate__animated animate__backInRight"
          />
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
                <span id="youtube" onClick={onClickTab}>
                  <YoutubeOutlined />
                  유튜브
                </span>
                <span id="insta" onClick={onClickTab}>
                  <InstagramOutlined />
                  인스타그램
                </span>
              </li>
              <li>
                <S.Input
                  type="text"
                  placeholder="크리에이터 검색"
                  onChange={onChangeInput}
                />
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
            {searchData?.searchCreators !== null
              ? searchData?.searchCreators?.map((el: any) =>
                  thisiscomponent(el)
                )
              : tab === "default"
              ? allCreatorData?.fetchCreators?.map((el: any) => {
                  return thisiscomponent(el);
                })
              : optionalData?.fetchCreatorsBySnsType?.map((el: any) => {
                  return thisiscomponent(el);
                })}
          </S.ImgWrapper>
          <S.Button onClick={onLoadMore}>
            <span>더보기</span>
          </S.Button>
        </S.Bottom>
      </S.Container>
    </>
  );
}

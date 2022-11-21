import { InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";
import CreatorsModal from "../../../commons/modal/creatorsModal";
import * as S from "./customList.styles";

export default function ComponentPage(P: any) {
  const { el, onClickList } = P;
  return (
    <S.ImgBox key={el.id}>
      {/* <CreatorsModal el={el} /> */}
      <S.Octagon
        onClick={onClickList}
        style={{
          backgroundImage: `url(${String(el.creatorAuthImg)})`,
        }}
      >
        <S.BgLayer className="bg_layer">
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
}

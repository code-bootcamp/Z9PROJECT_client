import { InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import CreatorsModal from "../../../commons/modal/creatorsModal";
import { FETCH_PRODUCTS_BY_PAGES } from "../list/list.queries";
import * as S from "./customList.styles";

export default function ComponentPage(P: any) {
  const { el } = P;
  const [modal, setModal] = useState(false);

  const onCLickModal = () => {
    setModal((prev) => !prev);
  };

  const { data } = useQuery(FETCH_PRODUCTS_BY_PAGES, {
    fetchPolicy: "cache-first",
    variables: { page: 1 },
  });

  return (
    <S.ImgBox key={el.id}>
      {data?.fetchProductsByPages.map(
        (dom: any) =>
          modal && (
            <>
              <CreatorsModal
                dom={dom}
                el={el}
                setModal={setModal}
                key={el.id}
              />
            </>
          )
      )}
      <S.Octagon
        onClick={onCLickModal}
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

import * as S from "./wish.styles";
import { PriceFormatter } from "../../../../commons/utils";

export default function WishPresenter() {
  return (
    <S.Container>
      <S.SubTitle>찜 목록</S.SubTitle>
      <S.BoardBody>
        <S.BoardLi>
          <S.Img src="/img_product.png" />
          <S.Box>
            <S.Price>{PriceFormatter(100000)}</S.Price>
            <S.Discount>{`20%`}</S.Discount>{" "}
          </S.Box>
          <S.Name>태양열 슈퍼보드 배터리, 충전기 포함</S.Name>
          <S.Creator>제이제이</S.Creator>
        </S.BoardLi>
      </S.BoardBody>
      <S.MoreBtn>
        <span>
          더보기 <data>1</data> / 1
        </span>
      </S.MoreBtn>
    </S.Container>
  );
}

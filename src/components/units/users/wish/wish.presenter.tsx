import * as S from "./wish.styles";
import { PriceFormatter } from "../../../../commons/utils";

export default function WishPresenter() {
  return (
    <S.Container>
      <S.SubTitle>찜 목록</S.SubTitle>
      <S.BoardBody>
        <S.BoardUl>
          <S.BoardLi>
            <S.Img src="/img_product.png" />
            <div>
              <S.Discount>{`20%`}</S.Discount>{" "}
              <S.Price>{PriceFormatter(100000)}</S.Price>
            </div>
            <S.Name>태양열 슈퍼보드 배터리, 충전기 포함</S.Name>
            <S.Creator>제이제이</S.Creator>
          </S.BoardLi>
        </S.BoardUl>
        <S.MoreBtn>
          더보기 1 <span>/ 1</span>
        </S.MoreBtn>
      </S.BoardBody>
    </S.Container>
  );
}

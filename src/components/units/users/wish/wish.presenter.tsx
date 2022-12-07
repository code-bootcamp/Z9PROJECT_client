import Link from "next/link";
import * as S from "./wish.styles";
import { IWishPresenterProps } from "./wish.types";
import { PriceFormatter } from "../../../../commons/utils";

export default function WishPresenter(P: IWishPresenterProps) {
  const { onClickMore, totalPage, presentPage, presentArray } = P;

  return (
    <S.Container>
      <S.SubTitle>찜 목록</S.SubTitle>
      <S.BoardBody>
        {presentArray?.map((el: any, i) => (
          <Link href={`/product/${String(el.id)}`} key={i}>
            <a>
              <S.BoardLi>
                <S.Img src={el.images[0]} />
                <S.Box>
                  <S.Price>{PriceFormatter(el.discountPrice)}</S.Price>
                  <S.Discount>{`${String(el.discountRate)}%`}</S.Discount>{" "}
                </S.Box>
                <S.Name>{el.name}</S.Name>
                <S.Creator>{el.user?.nickname}</S.Creator>
              </S.BoardLi>
            </a>
          </Link>
        ))}
      </S.BoardBody>
      <S.MoreBtn onClick={onClickMore}>
        <span>
          더보기 <data>{presentPage}</data> / {totalPage}
        </span>
      </S.MoreBtn>
    </S.Container>
  );
}

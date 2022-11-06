import { PointFormatter } from "../../../../commons/utils";
import { DatePicker, Pagination } from "antd";
import * as S from "./sales.styles";
import { ISalesPresenterProps } from "./sales.types";

export default function SalesPresenter(P: ISalesPresenterProps) {
  const { onChangePage } = P;
  const { RangePicker } = DatePicker;

  return (
    <S.Container>
      <S.SubTitle>판매내역</S.SubTitle>
      <S.BoardTopWrapper>
        <S.PeriodWrapper>
          <S.PeriodBtn>1개월</S.PeriodBtn>
          <S.PeriodBtn>3개월</S.PeriodBtn>
          <S.PeriodBtn>6개월</S.PeriodBtn>
          <S.PeriodBtn>12개월</S.PeriodBtn>
        </S.PeriodWrapper>
        <S.SearchWrapper>
          <RangePicker />
          <S.SearchBtn>조회</S.SearchBtn>
        </S.SearchWrapper>
      </S.BoardTopWrapper>
      <S.BoardBody>
        <S.BoardTh>
          <S.BDate>날짜</S.BDate>
          <S.BContents>상품명</S.BContents>
          <S.BPrice>판매액</S.BPrice>
          <S.BPurchaser>구매자</S.BPurchaser>
          <S.BRefund>환불</S.BRefund>
        </S.BoardTh>
        <S.BoardUl>
          <S.BoardLi>
            <S.BDate>2020.02.20</S.BDate>
            <S.BContents>아기다리고기다리던아버지가방에들어가신다</S.BContents>
            <S.BPrice>{PointFormatter(100000)}</S.BPrice>
            <S.BPurchaser>코난</S.BPurchaser>
            <S.BRefund>
              {true ? <S.RefundBtn>환불</S.RefundBtn> : "환불완료"}
            </S.BRefund>
          </S.BoardLi>
          <S.BoardLi>
            <S.BDate>2020.02.20</S.BDate>
            <S.BContents>아기다리고기다리던아버지가방에들어가신다</S.BContents>
            <S.BPrice>{PointFormatter(100000)}</S.BPrice>
            <S.BPurchaser>코난</S.BPurchaser>
            <S.BRefund>
              {false ? <S.RefundBtn>환불</S.RefundBtn> : "환불완료"}
            </S.BRefund>
          </S.BoardLi>
        </S.BoardUl>
        <Pagination size="small" total={50} onChange={onChangePage} />
      </S.BoardBody>
    </S.Container>
  );
}

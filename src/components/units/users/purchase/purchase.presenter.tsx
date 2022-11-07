import { PointFormatter } from "../../../../commons/utils";
import { DatePicker, Pagination } from "antd";
import * as S from "./purchase.styles";
import { IPurchasePresenterProps } from "./purchase.types";

export default function PurchasePresenter(P: IPurchasePresenterProps) {
  const { onChangePage } = P;
  const { RangePicker } = DatePicker;

  return (
    <S.Container>
      <S.SubTitle>구매내역</S.SubTitle>
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
          <S.BPrice>금액</S.BPrice>
          <S.BSeller>판매자</S.BSeller>
          <S.BRefund>환불</S.BRefund>
        </S.BoardTh>
        <S.BoardUl>
          <S.BoardLi>
            <S.BDate>2022.10.24</S.BDate>
            <S.BContents>태양열 슈퍼보드</S.BContents>
            <S.BPrice>{PointFormatter(100000)}</S.BPrice>
            <S.BSeller>아가사</S.BSeller>
            <S.BRefund>
              <S.RefundBtn>환불</S.RefundBtn>
            </S.BRefund>
          </S.BoardLi>
          <S.BoardLi>
            <S.BDate>2022.08.22</S.BDate>
            <S.BContents>축구공 허리띠</S.BContents>
            <S.BPrice>{PointFormatter(100000)}</S.BPrice>
            <S.BSeller>아가사</S.BSeller>
            <S.BRefund>{"완료"}</S.BRefund>
          </S.BoardLi>
          <S.BoardLi>
            <S.BDate>2021.07.20</S.BDate>
            <S.BContents>추적 안경</S.BContents>
            <S.BPrice>{PointFormatter(100000)}</S.BPrice>
            <S.BSeller>아가사</S.BSeller>
            <S.BRefund>{"신청"}</S.BRefund>
          </S.BoardLi>
        </S.BoardUl>
        <Pagination size="small" total={50} onChange={onChangePage} />
      </S.BoardBody>
    </S.Container>
  );
}

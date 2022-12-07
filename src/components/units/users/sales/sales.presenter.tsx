import * as S from "./sales.styles";
import { DatePicker, Pagination } from "antd";
import { ISalesPresenterProps } from "./sales.types";
import { dateFormatter, PointFormatter } from "../../../../commons/utils";

export default function SalesPresenter(P: ISalesPresenterProps) {
  const {
    tab,
    onClickTab,
    sellHistory,
    HistoryCount,
    currentPage,
    onClickPage,
    onChangeDate,
    onClickAccept,
  } = P;
  const { RangePicker } = DatePicker;
  const btnArray = ["1개월", "3개월", "6개월", "12개월"];

  return (
    <S.Container>
      <S.SubTitle>판매내역</S.SubTitle>
      <S.BoardTopWrapper>
        <S.PeriodWrapper tab={tab}>
          {btnArray.map((el: any, i: number) => (
            <S.PeriodBtn id={String(i + 1)} onClick={onClickTab} key={i}>
              {el}
            </S.PeriodBtn>
          ))}
        </S.PeriodWrapper>
        <S.SearchWrapper>
          <RangePicker onChange={onChangeDate} />
          <S.SearchBtn>
            <span>조회</span>
          </S.SearchBtn>
        </S.SearchWrapper>
      </S.BoardTopWrapper>
      <S.BoardBody>
        <S.BoardTh>
          <S.BDate>날짜</S.BDate>
          <S.BContents>상품명</S.BContents>
          <S.BPrice>판매액</S.BPrice>
          <S.BPurchaser>구매자</S.BPurchaser>
          <S.BRefund>상태</S.BRefund>
        </S.BoardTh>
        <ul>
          {sellHistory?.fetchOrdersByCreatorId.length !== 0 ? (
            sellHistory?.fetchOrdersByCreatorId.map((el: any, i: number) => (
              <S.BoardLi key={i}>
                <S.BDate>{dateFormatter(el.createdAt)}</S.BDate>
                <S.BContents>{el.product.name}</S.BContents>
                <S.BPrice>{PointFormatter(el.price)}</S.BPrice>
                <S.BPurchaser>{el.user.nickname}</S.BPurchaser>
                <S.BRefund>
                  {el.status === "PAID" ? (
                    "판매"
                  ) : el.status === "PENDING_REFUND" ? (
                    <S.RefundBtn type="button" onClick={onClickAccept(el.id)}>
                      <span>환불</span>
                    </S.RefundBtn>
                  ) : (
                    "환불"
                  )}
                </S.BRefund>
              </S.BoardLi>
            ))
          ) : (
            <S.BoardLiEmpty>
              <span>판매 내역이 없습니다.</span>
            </S.BoardLiEmpty>
          )}
        </ul>
        <Pagination
          size="small"
          defaultCurrent={1}
          total={HistoryCount}
          current={currentPage}
          onChange={onClickPage}
          showSizeChanger={false}
        />
      </S.BoardBody>
    </S.Container>
  );
}

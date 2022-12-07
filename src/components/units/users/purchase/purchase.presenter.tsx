import * as S from "./purchase.styles";
import { DatePicker, Pagination } from "antd";
import { IPurchasePresenterProps } from "./purchase.types";
import { dateFormatter, PointFormatter } from "../../../../commons/utils";

export default function PurchasePresenter(P: IPurchasePresenterProps) {
  const {
    tab,
    onClickTab,
    onClickPage,
    currentPage,
    HistoryCount,
    onChangeDate,
    onClickRefund,
    purchaseHistory,
  } = P;
  const { RangePicker } = DatePicker;
  const btnArray = ["1개월", "3개월", "6개월", "12개월"];

  return (
    <S.Container>
      <S.SubTitle>구매내역</S.SubTitle>
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
          <S.BPrice>금액</S.BPrice>
          <S.BSeller>판매자</S.BSeller>
          <S.BRefund>환불</S.BRefund>
        </S.BoardTh>
        <ul>
          {purchaseHistory?.fetchOrdersByUserId.length !== 0 ? (
            purchaseHistory?.fetchOrdersByUserId.map((el: any, i: number) => (
              <S.BoardLi key={i}>
                <S.BDate>{dateFormatter(el.createdAt)}</S.BDate>
                <S.BContents>{el.product?.name}</S.BContents>
                <S.BPrice>{PointFormatter(el.price)}</S.BPrice>
                <S.BSeller>{el.product?.user?.nickname}</S.BSeller>
                <S.BRefund>
                  {el.status === "PAID" ? (
                    <S.RefundBtn type="button" onClick={onClickRefund(el.id)}>
                      <span>환불</span>
                    </S.RefundBtn>
                  ) : el.status === "PENDING_REFUND" ? (
                    "신청 완료"
                  ) : (
                    "환불 완료"
                  )}
                </S.BRefund>
              </S.BoardLi>
            ))
          ) : (
            <S.BoardLiEmpty>
              <span>구매 내역이 없습니다.</span>
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

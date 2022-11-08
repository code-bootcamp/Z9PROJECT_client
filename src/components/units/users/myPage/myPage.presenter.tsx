import { PointFormatter } from "../../../../commons/utils";
import { DatePicker, Pagination } from "antd";
import * as S from "./myPage.styles";
import { IMyPagePresenterProps } from "./myPage.types";
import ChargeModal from "../../../commons/modal/charge";

export default function MyPagePresenter(P: IMyPagePresenterProps) {
  const { onChangePage } = P;
  const { RangePicker } = DatePicker;

  return (
    <S.Container>
      <S.PointWrapper>
        <S.PointText>보유 포인트</S.PointText>
        <S.PointText>
          <S.Point>{PointFormatter(12310002310)}</S.Point> p
        </S.PointText>
        <div>적절한 구입은 삶에 큰 도움이 됩니다.</div>
      </S.PointWrapper>
      <S.HistoryWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>포인트 적립 및 사용 내역</S.SubTitle>
          <ChargeModal />
        </S.SubTitleWrapper>
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
            <S.BContents>내용</S.BContents>
            <S.BHistory>거래 및 충전 내역</S.BHistory>
            <S.BBalance>잔액</S.BBalance>
          </S.BoardTh>
          <S.BoardUl>
            <S.BoardLi>
              <S.BDate>2020.02.20</S.BDate>
              <S.BContents>판매</S.BContents>
              <S.BHistory>{PointFormatter(100000)}</S.BHistory>
              <S.BBalance>{PointFormatter(100000)}</S.BBalance>
            </S.BoardLi>
          </S.BoardUl>
          <Pagination size="small" total={50} onChange={onChangePage} />
        </S.BoardBody>
      </S.HistoryWrapper>
    </S.Container>
  );
}

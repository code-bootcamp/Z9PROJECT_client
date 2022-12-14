import { dateFormatter, PointFormatter } from "../../../../commons/utils";
import { DatePicker, Pagination } from "antd";
import * as S from "./myPage.styles";
import { IMyPagePresenterProps } from "./myPage.types";
import ChargeModal from "../../../commons/modal/charge";

export default function MyPagePresenter(P: IMyPagePresenterProps) {
  const {
    onClickPage,
    tab,
    onClickTab,
    fetchUser,
    onChangeDate,
    historyCount,
    PonintHistory,
  } = P;
  const { RangePicker } = DatePicker;
  const btnArray = ["1개월", "3개월", "6개월", "12개월"];

  return (
    <S.Container>
      <S.PointWrapper>
        <div>
          <S.PointText>보유 포인트</S.PointText>
          <S.PointText>
            <S.Point>
              {PointFormatter(fetchUser ? fetchUser.fetchUser.point : 0)}
              <strong>P</strong>
            </S.Point>
          </S.PointText>
          <div>적절한 구입은 삶에 큰 도움이 됩니다.</div>
        </div>
        <S.Charge>
          <ChargeModal />
        </S.Charge>
      </S.PointWrapper>
      <S.HistoryWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>포인트 적립 및 사용 내역</S.SubTitle>
        </S.SubTitleWrapper>
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
            <S.BContents>내용</S.BContents>
            <S.BHistory>거래 및 충전 내역</S.BHistory>
            <S.BBalance>잔액</S.BBalance>
          </S.BoardTh>
          <S.BoardUl>
            {PonintHistory?.fetchPointHistory.map((el: any) => (
              <S.BoardLi>
                <S.BDate>{dateFormatter(el.createdAt)}</S.BDate>
                <S.BContents>{el.status}</S.BContents>
                <S.BHistory>{PointFormatter(el.point)} P</S.BHistory>
                <S.BBalance>{PointFormatter(100000)} P</S.BBalance>
              </S.BoardLi>
            ))}
          </S.BoardUl>
          <Pagination
            size="small"
            total={historyCount?.fetchCountOfPointHistory}
            onChange={onClickPage}
          />
        </S.BoardBody>
      </S.HistoryWrapper>
    </S.Container>
  );
}

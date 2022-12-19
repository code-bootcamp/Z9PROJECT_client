import styled from "@emotion/styled";
import { IStylesProps } from "./myPage.types";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.section`
  padding: 50px 0;
  width: 100%;

  @media ${styleSet.breakePoints.mobile} {
    padding: 0;
  }
`;

export const Charge = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const PointWrapper = styled.section`
  padding: 50px 0 20px 0;
  width: 100%;
  border-radius: 10px;
  color: ${styleSet.colors.white};
  background-color: ${styleSet.colors.subcolor1};
  clear: both;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${styleSet.breakePoints.mobile} {
    margin-top: 40px;
  }
`;

export const PointText = styled.span`
  font-size: ${styleSet.fontSize.s7};
`;

export const Point = styled.span`
  font-size: ${styleSet.fontSize.s2};
  font-family: ${styleSet.font.B};
`;

export const SubTitleWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HistoryWrapper = styled.section`
  padding: 40px 0;
  width: 100%;
`;

export const SubTitle = styled.h2`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};
`;

export const BoardTopWrapper = styled.div`
  padding: 30px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media ${styleSet.breakePoints.mobile} {
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const PeriodWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  li {
    &:nth-of-type(${(props: IStylesProps) => (props.tab ? props.tab : 1)}) {
      border: 1px solid ${styleSet.colors.primary};
      color: ${styleSet.colors.primary};
    }
  }

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
`;

export const PeriodBtn = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 72px;
  height: 48px;
  border-radius: 10px;
  border: 1px solid ${styleSet.colors.gray};
  font-size: ${styleSet.fontSize.s8};

  :hover {
    border: 1px solid ${styleSet.colors.primary};
    color: ${styleSet.colors.primary};
  }

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  .ant-picker {
    padding: 0 15px 0 20px;
    height: 48px;
    border-radius: 10px;
    color: ${styleSet.colors.black};

    @media ${styleSet.breakePoints.mobile} {
      width: 100%;
    }
  }

  .ant-picker:hover,
  .ant-picker-focused {
    border-color: ${styleSet.colors.subcolor1};
  }

  .ant-picker-input {
    input {
      text-align: center;
    }
  }

  .ant-picker-active-bar {
    background: ${styleSet.colors.primary};
  }

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
`;

export const SearchBtn = styled.button`
  width: 72px;
  height: 48px;
  border-radius: 10px;
  background: ${styleSet.colors.primary};
  font-size: ${styleSet.fontSize.s8};
  color: ${styleSet.colors.white};
  position: relative;
  overflow: hidden;

  &&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 0;
    height: 120%;
    background: ${styleSet.colors.aftercolor};
    transition: all 0.3s ease;
    transform: skewX(15deg);
  }
  &&:hover {
    color: #fff;
    ::before {
      width: 120%;
    }
  }
  span {
    display: block;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  @media ${styleSet.breakePoints.mobile} {
    width: 30%;
  }
`;

export const BoardBody = styled.div`
  padding: 20px 0;
  width: 100%;

  text-align: center;

  .ant-pagination {
    padding: 20px 0;
    font-size: ${styleSet.fontSize.s7};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    gap: 10px;
  }

  .ant-pagination-item-active {
    border-color: ${styleSet.colors.primary};
  }
  .ant-pagination-item:hover a {
    color: ${styleSet.colors.primary};
  }
  .ant-pagination-item-active a {
    color: ${styleSet.colors.primary};
  }
`;

export const BoardTh = styled.ul`
  padding: 20px 0;
  width: 100%;
  background: #f7f7f7;
  border-top: 2px solid ${styleSet.colors.subcolor1};
  font-size: ${styleSet.fontSize.s7};
  display: flex;
`;

export const BoardUl = styled.div``;

export const BoardLi = styled.div`
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid ${styleSet.colors.gray};
  font-size: ${styleSet.fontSize.s8};
  display: flex;
`;

export const BDate = styled.span`
  width: 30%;
  text-align: center;
`;

export const BContents = styled.span`
  width: 30%;
  text-align: center;
`;

export const BHistory = styled.span`
  width: 40%;
  text-align: center;
`;

export const Modal = styled.section`
  width: 300px;
  height: 300px;
  background: ${styleSet.colors.darkgray};

  position: fixed;
  left: 50%;
  top: 0;
`;

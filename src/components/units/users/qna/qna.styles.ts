import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.section`
  padding: 50px 0;
  width: 100%;

  @media ${styleSet.breakePoints.mobile} {
    padding: 0;
  }
`;

export const SubTitle = styled.h2`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};
  @media ${styleSet.breakePoints.mobile} {
    display: none;
  }
`;

export const H3 = styled.h3`
  font-size: ${styleSet.fontSize.s9};

  @media ${styleSet.breakePoints.mobile} {
    padding-top: 30px;
    text-align: center;
  }
`;

export const Comment = styled.section`
  border-radius: 15px;
`;

export const Count = styled.ul`
  display: flex;
  gap: 15px;
  border-bottom: 1px solid ${styleSet.colors.black};
  padding-bottom: 20px;
  li {
    font-size: ${styleSet.fontSize.s8};
    color: ${styleSet.colors.darkgray};
  }
`;

export const Wrapper = styled.div`
  max-width: 1460px;
  margin: 0 auto;
  background: ${styleSet.colors.white};
  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
`;

export const H4 = styled.h4`
  font-size: ${styleSet.fontSize.s6};
  padding-top: 40px;
  font-family: ${styleSet.font.B};
  display: none;
  @media ${styleSet.breakePoints.mobile} {
    display: block;
  }
`;

export const Title = styled.ul`
  font-size: ${styleSet.fontSize.s9};
  font-family: ${styleSet.font.B};
  color: ${styleSet.colors.darkgray};
  padding: 40px 20px 10px 20px;
  border-bottom: 1px solid ${styleSet.colors.gray};
  display: flex;
  justify-content: space-between;
  text-align: center;
  &.writer {
    max-width: 110px;
    min-width: 50px;
  }
  &.createdAt {
  }
  li {
    &:nth-last-of-type(1) {
      max-width: 100px;
      width: 100%;
    }
    &:nth-last-of-type(4) {
      max-width: 165px;
      width: 100%;
    }
  }
  @media ${styleSet.breakePoints.mobile} {
    padding-top: 0;
    li {
      display: none;
    }
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

export const BoardTh = styled.div`
  padding: 20px 0;
  width: 100%;
  background: #f7f7f7;
  border-top: 2px solid ${styleSet.colors.subcolor1};
  font-size: ${styleSet.fontSize.s7};
  display: flex;
`;

export const BoardLiEmpty = styled.li`
  padding: 20px;
  border-bottom: 1px solid ${styleSet.colors.gray};
  width: 100%;
`;

export const BoardLi = styled.div`
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid ${styleSet.colors.gray};
  font-size: ${styleSet.fontSize.s8};
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const QuestionLi = styled.div`
  padding: 20px 40px;
  width: 100%;
  background: #f7f7f7;
  flex-wrap: wrap;
`;

export const BDate = styled.span`
  width: 30%;
  text-align: center;
`;

export const BContents = styled.span`
  width: 40%;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const BPrice = styled.span`
  width: 30%;
  text-align: center;
`;

export const QuestionWrapper = styled.div`
  width: 100%;
`;

export const EmptyText = styled.li`
  padding: 20px;
  width: 100%;
  text-align: center;
`;

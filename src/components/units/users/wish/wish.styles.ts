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

export const BoardUl = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  flex-wrap: wrap;
`;

export const BoardLi = styled.div`
  width: 100%;
  max-width: 248px;
  height: 370px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  flex-wrap: wrap;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 248px;
  aspect-ratio: 1/1;
`;

export const Discount = styled.span`
  color: ${styleSet.colors.red};
  font-size: ${styleSet.fontSize.s7};
`;

export const Price = styled.span`
  font-size: ${styleSet.fontSize.s6};
  font-family: ${styleSet.font.EB};
`;

export const Name = styled.span`
  font-size: ${styleSet.fontSize.s7};
  text-align: left;
`;

export const Creator = styled.span`
  font-size: ${styleSet.fontSize.s8};
  font-family: ${styleSet.font.B};
`;

export const MoreBtn = styled.button`
  width: 50%;
  height: 60px;
  font-size: ${styleSet.fontSize.s7};
  border: 1px solid ${styleSet.colors.primary};
  span {
    color: ${styleSet.colors.primary};
  }
`;

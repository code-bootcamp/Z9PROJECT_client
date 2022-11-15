import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.section`
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

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

export const BoardBody = styled.ul`
  gap: 51px;
  padding: 20px 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

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

export const BoardLi = styled.li`
  width: 100%;
  max-width: 248px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 15px;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 248px;
  aspect-ratio: 1/1;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Discount = styled.span`
  color: ${styleSet.colors.red};
  font-family: ${styleSet.font.EB};
  font-size: ${styleSet.fontSize.s9};
  letter-spacing: -0.5px;
  margin-left: 5px;
`;

export const Price = styled.span`
  font-size: ${styleSet.fontSize.s6};
  font-family: ${styleSet.font.EB};
`;

export const Name = styled.span`
  font-size: ${styleSet.fontSize.s8};
  font-family: ${styleSet.font.B};
  text-align: left;
  word-break: keep-all;
`;

export const Creator = styled.span`
  font-size: ${styleSet.fontSize.s8};
  font-family: ${styleSet.font.B};
  color: ${styleSet.colors.primary};
`;

export const MoreBtn = styled.button`
  width: 50%;
  height: 60px;
  font-size: ${styleSet.fontSize.s7};
  border: 1px solid ${styleSet.colors.primary};
  margin: 20px 0;
  overflow: hidden;
  position: relative;
  data {
    color: ${styleSet.colors.darkgray};
  }

  &&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 0;
    height: 120%;
    background: ${styleSet.colors.primary};
    transition: all 0.3s ease;
    transform: skewX(15deg);
  }
  &&:hover {
    color: ${styleSet.colors.white};
    ::before {
      width: 120%;
    }
    span {
      color: ${styleSet.colors.white};
    }
  }
  span {
    display: block;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
    color: ${styleSet.colors.primary};
  }
`;

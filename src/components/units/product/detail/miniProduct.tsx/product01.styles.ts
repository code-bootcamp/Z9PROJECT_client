import styled from "@emotion/styled";
import { Select } from "antd";
import { styleSet } from "../../../../../commons/styles/styleSet";

export const InfoRight = styled.div`
  width: 380px;
  border-radius: 10px;
  padding: 30px;
  border: 1px solid #eee;
  position: sticky;
  bottom: 30%;
  background: ${styleSet.colors.white};
  margin-left: 73%;

  @media ${styleSet.breakePoints.mobile} {
    display: none;
  }
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: ${styleSet.fontSize.s6};
  }
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};
  padding-block: 10px;
  letter-spacing: -1.4px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
`;

export const Text = styled.div`
  border-bottom: 2px dashed ${styleSet.colors.gray};
  ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 15px;
    li {
      font-size: ${styleSet.fontSize.s9};
      font-family: ${styleSet.font.B};
    }
  }
`;

export const Price = styled.li`
  color: ${styleSet.colors.darkgray};
  font-family: ${styleSet.font.B};
  text-decoration-line: line-through;
`;

export const PriceSale = styled.li`
  color: ${styleSet.colors.primary};
  font-family: ${styleSet.font.EB};
  strong {
    background: ${styleSet.colors.primary};
    font-size: 0.7rem;
    color: ${styleSet.colors.white};
    font-family: ${styleSet.font.B};
    padding: 5px 5px;
    border-radius: 7px;
    margin-right: 5px;
  }
`;

export const Close = styled.li`
  font-family: ${styleSet.font.EB};
`;

export const MySelect = styled(Select)`
  width: 250px !important;
`;

export const H2 = styled.h2`
  font-size: ${styleSet.fontSize.s4};
  font-family: ${styleSet.font.EB};
  padding-block: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const Piece = styled.aside`
  height: 110px;
  border-radius: 10px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #eee;
  p {
    font-family: ${styleSet.font.B};
    font-size: ${styleSet.fontSize.s8};

    span {
      display: block;
      color: ${styleSet.colors.darkgray};
    }
  }
`;

export const Choose = styled.p`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #qtyMinus {
    margin-left: -7px;
    background: ${styleSet.colors.primary};
    color: ${styleSet.colors.white};
    border-radius: 50%;
    font-size: ${styleSet.fontSize.s9};
  }
  #qtyPlus {
    margin-right: -7px;
    background: ${styleSet.colors.primary};
    color: ${styleSet.colors.white};
    border-radius: 50%;
    font-size: ${styleSet.fontSize.s9};
  }
`;

export const H3 = styled.h3`
  font-size: ${styleSet.fontSize.s6};
  padding-top: 10px;
  font-family: ${styleSet.font.B};
  padding-block: 20px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong {
    font-size: ${styleSet.fontSize.s7};
    color: ${styleSet.colors.primary};
    font-family: ${styleSet.font.EB};
  }
`;
export const BoxBtn = styled.div`
  display: flex;
  justify-content: space-between;
  .cart {
    background: ${styleSet.colors.white};
    border: 1px solid ${styleSet.colors.lightGray};
    width: 35%;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    svg {
      color: ${styleSet.colors.red};
    }
  }
  .closed {
    background-color: ${styleSet.colors.darkgray};
    width: 60%;
    color: ${styleSet.colors.white};
    position: relative;
    overflow: hidden;
    cursor: help;
  }

  .buy {
    background-color: ${styleSet.colors.subcolor4};
    width: 60%;
    color: ${styleSet.colors.white};
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      display: block;
      position: absolute;
      bottom: -5%;
      left: -10%;
      width: 0;
      height: 120%;
      background: #f6a70a;
      transition: all 0.3s ease;
      transform: skewX(15deg);
    }
    &:hover {
      color: ${styleSet.colors.white};
      ::before {
        width: 120%;
      }
    }
    .emotion {
      display: block;
      position: relative;
      z-index: 1;
      transition: color 0.3s ease;
    }
  }

  button {
    font-size: ${styleSet.fontSize.s7};
    font-family: ${styleSet.font.B};
    position: relative;
    overflow: hidden;
    height: 60px;
  }
`;

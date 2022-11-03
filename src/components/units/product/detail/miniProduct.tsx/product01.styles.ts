import styled from "@emotion/styled";
import { Select } from "antd";
import { styleSet } from "../../../../../commons/styles/styleSet";

export const InfoRight = styled.div`
  width: 380px;
  border-radius: 20px;
  padding: 30px;
  border: 1px solid #eee;
  position: absolute;
  background: ${styleSet.colors.white};
  right: 0;
  top: 38%;
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s3};
  font-family: ${styleSet.font.B};
  padding-block: 10px;
  letter-spacing: -1.4px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
`;

export const Text = styled.div`
  border-bottom: 2px dashed ${styleSet.colors.gray};
  padding-bottom: 10px;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 15px;
    li {
      font-size: ${styleSet.fontSize.s9};
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
    font-size: ${styleSet.fontSize.s9};
    color: ${styleSet.colors.white};
    padding: 5px 10px;
    border-radius: 15px;
    margin-right: 15px;
  }
`;

export const Close = styled.li`
  color: ${styleSet.colors.point1};
  font-family: ${styleSet.font.EB};
`;

export const MySelect = styled(Select)`
  width: 250px !important;
`;

export const H2 = styled.h2`
  font-size: ${styleSet.fontSize.s4};
  font-family: ${styleSet.font.EB};
  padding-block: 10px;
  text-align: right;
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
  width: 120px;
  border: 1px solid #eee;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #qtyMinus {
    margin-left: -7px;
  }
  #qtyPlus {
    margin-right: -7px;
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
    font-size: ${styleSet.fontSize.s7};
    border: 1px solid #ccc;
    font-family: ${styleSet.font.B};
    height: 60px;
    width: 40%;
  }
  .buy {
    background: ${styleSet.colors.red};
    font-size: ${styleSet.fontSize.s7};
    font-family: ${styleSet.font.B};
    height: 60px;
    width: 55%;
    color: ${styleSet.colors.white};
  }
`;

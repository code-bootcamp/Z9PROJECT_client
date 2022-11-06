import styled from "@emotion/styled";
import { Select } from "antd";
import { styleSet } from "../../../../../commons/styles/styleSet";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 150px 0 100px 0;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  position: relative;
`;

export const H5 = styled.h5`
  font-family: ${styleSet.font.B};
  font-size: ${styleSet.fontSize.s2};
  padding-bottom: 30px;
`;
export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 30px;
  border-top: 1px solid ${styleSet.colors.gray};
  button {
    color: ${styleSet.colors.point1};
    background: ${styleSet.colors.white};
    border: 1px solid ${styleSet.colors.point1};
    font-family: ${styleSet.font.B};
    width: 100px;
    height: 40px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    transition: color 0.3s ease;
    z-index: 9;
    &:hover {
      color: ${styleSet.colors.white};
    }
    &:hover:before {
      width: 120%;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      bottom: -5%;
      left: -10%;
      width: 0;
      height: 120%;
      background: ${styleSet.colors.point1};
      transition: all 0.3s ease;
      transform: skewX(15deg);
      z-index: -1;
    }
  }
`;

export const ProdInfo = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
export const InfoLeft = styled.div`
  text-align: center;
  width: 48%;
  > img {
    border-radius: 20px;
    height: 750px;
    overflow: hidden;
    width: 650px;
  }
`;

export const InfoRight = styled.div`
  background: #f8f8f8;
  width: 50%;
  border-radius: 20px;
  padding: 50px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid ${styleSet.colors.darkgray};
    padding-bottom: 20px;
    li {
      font-size: ${styleSet.fontSize.s7};
      display: flex;
      align-items: center;
      cursor: pointer;
      :last-child {
        font-size: ${styleSet.fontSize.s5};
      }
    }
  }
`;

export const Bell = styled.li`
  background-color: ${styleSet.colors.subcolor4};
  padding: 5px 10px;
  color: ${styleSet.colors.white};
  border-radius: 10px;
  &:hover {
    background-color: ${styleSet.colors.point1};
  }
`;

export const ul = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  li {
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
    width: calc(100% / 3 - 10px);
    cursor: pointer;
    border: 2px solid ${styleSet.colors.tp};
    &:hover {
      border: 2px solid ${styleSet.colors.primary};
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s3};
  font-family: ${styleSet.font.B};
  padding-block: 20px;
`;

export const Strong = styled.strong`
  font-size: ${styleSet.fontSize.s8};
  font-family: ${styleSet.font.B};
  color: ${styleSet.colors.black};
  margin-bottom: 10px;
  display: block;
`;

export const Text = styled.div`
  border-bottom: 2px dashed ${styleSet.colors.gray};
  ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 25px;
    li {
      font-size: ${styleSet.fontSize.s8};
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
    padding: 5px 8px;
    font-family: ${styleSet.font.B};
    border-radius: 7px;
    margin-right: 5px;
  }
`;

export const Close = styled.li`
  font-family: ${styleSet.font.B};
`;

export const MySelect = styled(Select)`
  width: 250px !important;
`;

export const Persent = styled.ul`
  li {
    color: ${styleSet.colors.darkgray};
    font-family: ${styleSet.font.L};
    font-size: 0.8rem !important;
  }
`;

export const Graph = styled.p`
  width: 100%;
  height: 30px;
  background: ${styleSet.colors.gray};
  display: block;
  border-radius: 15px;
  text-align: center;
  line-height: 30px;
  color: ${styleSet.colors.darkgray};
  position: relative;
  span {
    background-color: ${styleSet.colors.primary};
    height: 30px;
    width: 30%;
    border-radius: 15px;
    text-align: center;
    color: ${styleSet.colors.white};
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    font-family: ${styleSet.font.B};
  }
`;

export const H2 = styled.h2`
  font-size: ${styleSet.fontSize.s3};
  font-family: ${styleSet.font.EB};
  padding-block: 20px;
  text-align: right;
`;

export const Tab = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  border-block: 1px solid ${styleSet.colors.gray};
  justify-content: center;
  line-height: 60px;
  margin-bottom: 50px;
  li {
    cursor: pointer;
    width: calc(100% / 2 - 10px);
    height: 100%;
    text-align: center;
    font-size: ${styleSet.fontSize.s8};
    color: ${styleSet.colors.darkgray};
    &:first-child {
      border-right: 1px solid ${styleSet.colors.gray};
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
    font-size: ${styleSet.fontSize.s7};
    font-family: ${styleSet.font.B};
    height: 60px;
    width: 35%;
    svg {
      color: ${styleSet.colors.red};
    }
  }
  .buy {
    background-color: ${styleSet.colors.subcolor4};
    font-size: ${styleSet.fontSize.s7};
    font-family: ${styleSet.font.B};
    height: 60px;
    width: 60%;
    color: ${styleSet.colors.white};
  }
`;

export const Randing = styled.img`
  margin-bottom: 30px;
`;

export const Reset = styled.img`
  cursor: pointer;
  position: fixed;
  right: 10%;
  bottom: 5%;
`;
// 댓글 영역

export const H4 = styled.h4`
  font-size: ${styleSet.fontSize.s7};
  font-family: ${styleSet.font.B};
  padding: 40px 0 10px 0;
  border-bottom: 1px solid ${styleSet.colors.gray};
`;

export const Wrapper3 = styled.div`
  width: 1400px;
  margin: 0 auto;
  box-shadow: 0 8px 20px rgb(0 0 0 / 5%);
  background: ${styleSet.colors.white};
  border-radius: 20px;
  padding: 30px;
`;

export const User = styled.section`
  padding-block: 20px;
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    border-radius: 20px;
    margin-right: 15px;
    overflow: hidden;
  }
`;

export const UserInfo = styled.p`
  display: flex;
  flex-direction: column;
  font-family: ${styleSet.font.B};
  font-size: ${styleSet.fontSize.s9};
  span {
    display: block;
    color: #aaa;
    font-family: ${styleSet.font.B};
    font-size: ${styleSet.fontSize.s9};
  }
`;

export const Comment = styled.section`
  border-radius: 15px;
  padding-block: 30px;
  margin-top: 30px;
`;

export const Count = styled.ul`
  display: flex;
  gap: 15px;
  border-bottom: 1px solid #000;
  padding-block: 20px;
  li {
    font-size: ${styleSet.fontSize.s8};
    color: ${styleSet.colors.darkgray};
  }
`;

export const Box = styled.section`
  border-bottom: 1px solid ${styleSet.colors.gray};
`;

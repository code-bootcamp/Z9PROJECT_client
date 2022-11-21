import styled from "@emotion/styled";
import { Select } from "antd";
import ReactPlayer from "react-player";
import { styleSet } from "../../../../../commons/styles/styleSet";
interface IProps {
  graph: number;
}

export const Info = styled.section`
  width: 100%;
  height: 100vh;
  text-align: center;
  & div {
    width: 1400px !important;
    height: 800px !important;
  }

  @media ${styleSet.breakePoints.mobile} {
    margin-bottom: 30px;
    height: -webkit-fill-available;
    & div {
      width: 600px !important;
      height: 350px !important;
    }
  }
`;

export const Player = styled(ReactPlayer)`
  width: 1400px;
  height: 800px;
  margin: 0 auto;

  @media ${styleSet.breakePoints.mobile} {
    width: 600px;
    height: -webkit-fill-available;
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 50px 0;
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: ${styleSet.fontSize.s6};
  }
`;

export const Wrapper = styled.div`
  max-width: 1460px;
  padding: 0 30px;
  margin: 0 auto;
  position: relative;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
`;

export const H5 = styled.h5`
  font-family: ${styleSet.font.B};
  font-size: ${styleSet.fontSize.s2};
  padding-bottom: 30px;

  @media ${styleSet.breakePoints.mobile} {
    &.mobile {
      display: none;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 40px;
  border-top: 1px solid ${styleSet.colors.gray};
  margin-top: 50px;
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
  gap: 70px;
  > div {
    width: calc(100% / 2 - 10px);
    height: 900px;
  }

  @media ${styleSet.breakePoints.mobile} {
    flex-direction: column;
    > div {
      width: 100%;
      margin-bottom: 30px;
      height: auto;
    }
  }
`;

export const InfoLeft = styled.div`
  text-align: center;
  width: 48%;
  > img {
    border-radius: 10px;
    height: 650px;
    overflow: hidden;
    max-width: 100%;
    width: 100%;
    aspect-ratio: 1/1;
  }

  @media ${styleSet.breakePoints.mobile} {
    > img {
      aspect-ratio: 1/1;
      width: 100%;
      height: min-content;
    }
  }
`;

export const H3Info = styled.h3`
  font-family: ${styleSet.font.B};
  padding-bottom: 10px;
`;

export const Company = styled.ul`
  display: flex;
  margin-top: -1px;
  flex-wrap: wrap;

  li {
    width: calc(100% / 2);
    border-bottom: 1px solid ${styleSet.colors.gray};
    font-size: 0.7rem;
    word-break: keep-all;
    display: flex;
    &:first-of-type,
    :nth-of-type(2) {
      border-top: 1px solid ${styleSet.colors.gray};
    }
    strong {
      background: ${styleSet.colors.subcolor3};
      color: ${styleSet.colors.black};
      padding: 12px;
      display: flex;
      align-items: center;
      min-width: 300px;
      max-width: 300px;
    }
    data {
      padding: 10px;
      display: flex;
      align-items: center;
    }
  }

  @media ${styleSet.breakePoints.mobile} {
    > img {
      height: 300px;
    }
    li {
      strong {
        padding: 0 10px;
        min-width: 50%;
        max-width: 50%;
      }
      data {
        padding: 10px;
        display: flex;
        align-items: center;
        width: 135px;
        overflow: auto;
      }
    }
  }
`;

export const Ref = styled.section``;

export const InfoRight = styled.div`
  background: #f8f8f8;
  border-radius: 20px;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  @media ${styleSet.breakePoints.mobile} {
    padding: 20px;
    img {
      height: 25px;
    }
  }
`;

export const Bell = styled.li`
  background-color: ${styleSet.colors.subcolor4};
  font-size: ${styleSet.fontSize.s8} !important;
  padding: 5px 10px;
  color: ${styleSet.colors.white};
  white-space: nowrap;
  border-radius: 10px;
  img {
    margin-left: 5px;
  }
  &:hover {
    background-color: ${styleSet.colors.point1};
  }

  @media ${styleSet.breakePoints.mobile} {
    font-size: 0.7rem !important;
    img {
      height: 15px;
      margin-left: 5px;
    }
  }
`;

export const ul = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  li {
    text-align: center;
    overflow: hidden;
    border-radius: 10px;
    width: calc(100% / 3 - 10px);
    cursor: pointer;
    border: 1px solid ${styleSet.colors.subcolor3};
    &:hover {
      border: 1px solid ${styleSet.colors.primary};
    }
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      aspect-ratio: 1/1;
    }
  }
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s4};
  font-family: ${styleSet.font.B};
  padding-block: 20px;
  min-height: 115px;
  max-height: 115px;
  overflow: hidden;

  @media ${styleSet.breakePoints.mobile} {
    font-size: ${styleSet.fontSize.s4};
    padding-block: 10px;
    white-space: inherit;
  }
`;

export const Strong = styled.strong`
  font-size: ${styleSet.fontSize.s8};
  font-family: ${styleSet.font.B};
  color: ${styleSet.colors.black};
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  > p > span {
    color: ${styleSet.colors.red};
  }
  span {
    font-size: ${styleSet.fontSize.s9};
    text-align: left;
    font-family: ${styleSet.font.B};
    letter-spacing: -1px;
  }
`;

export const Text = styled.div`
  border-bottom: 2px dashed ${styleSet.colors.gray};
  ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 20px;
    li {
      font-size: ${styleSet.fontSize.s8};
      font-family: ${styleSet.font.B};
    }
  }

  @media ${styleSet.breakePoints.mobile} {
    ul {
      padding-bottom: 10px;
      li {
        white-space: nowrap;
        font-size: ${styleSet.fontSize.s6};
      }
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
  width: 250px;
`;

export const Persent = styled.ul`
  li {
    color: ${styleSet.colors.darkgray};
    font-family: ${styleSet.font.L};
    font-size: 0.8rem;
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
    background: linear-gradient(-45deg, #f46a22, #ffd480);
    height: 30px;
    max-width: 100%;
    min-width: 0%;
    border-radius: 15px;
    text-align: center;
    color: ${styleSet.colors.white};
    font-size: ${styleSet.fontSize.s9};
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    font-family: ${styleSet.font.B};
    letter-spacing: -0.8px;
  }
`;

export const GraphPercent = styled.span`
  width: ${(props: IProps) => {
    return `${props.graph}%`;
  }};
`;

export const H2 = styled.div`
  font-size: ${styleSet.fontSize.s4};
  font-family: ${styleSet.font.EB};
  padding-top: 20px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${styleSet.breakePoints.mobile} {
    padding-block: 10px;
  }
`;

export const Tab = styled.ul`
  max-width: 1400px;
  height: 60px;
  display: flex;
  justify-content: center;
  margin: 100px 0 50px 0;
  gap: 30px;
  align-items: center;
  li {
    cursor: pointer;
    border-block: 1px solid ${styleSet.colors.primary};
    height: 100%;
    text-align: center;
    font-size: ${styleSet.fontSize.s8};
    color: ${styleSet.colors.primary};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border-block: 1px solid ${styleSet.colors.point2};
      color: ${styleSet.colors.point2};
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

  @media ${styleSet.breakePoints.mobile} {
    width: 80px;
  }
`;

export const H3 = styled.h3`
  font-size: ${styleSet.fontSize.s6};
  padding-block: 5%;
  font-family: ${styleSet.font.B};
  padding-bottom: 10px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong {
    font-size: ${styleSet.fontSize.s5};
    color: ${styleSet.colors.primary};
    font-family: ${styleSet.font.EB};
  }

  @media ${styleSet.breakePoints.mobile} {
    padding: 0 0 15px 0;
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

export const Randing = styled.article`
  width: 65%;
  margin-bottom: 30px;
  p {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
`;

export const Reset = styled.img`
  cursor: pointer;
  position: fixed;
  right: 15%;
  bottom: 5%;
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

export const Wrapper3 = styled.div`
  max-width: 1460px;
  margin: 0 auto;
  background: ${styleSet.colors.white};
  padding: 0 30px 30px 30px;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
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

export const Box = styled.section``;

export const Important = styled.section`
  h3 {
    font-size: ${styleSet.fontSize.s5};
  }
`;

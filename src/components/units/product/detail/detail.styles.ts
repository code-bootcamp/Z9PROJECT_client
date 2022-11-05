import styled from "@emotion/styled";
import { Select } from "antd";
import { styleSet } from "../../../../commons/styles/styleSet";

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
  margin-bottom: 100px;
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
  background: #f1f1f1;
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
      cursor: pointer;
      :last-child {
        font-size: ${styleSet.fontSize.s5};
      }
    }
  }
`;

export const Bell = styled.li`
  background-color: ${styleSet.colors.black};
  padding: 5px 20px;
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
    cursor: pointer;
    border: 2px solid ${styleSet.colors.point1};
    &:hover {
      border: 2px solid ${styleSet.colors.primary};
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s3};
  font-family: ${styleSet.font.B};
  padding-block: 20px;
`;

export const Text = styled.div`
  border-bottom: 2px dashed ${styleSet.colors.gray};
  padding-bottom: 30px;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 25px;
    li {
      font-size: ${styleSet.fontSize.s7};
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
    background-color: ${styleSet.colors.point1};
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

export const Piece = styled.aside`
  height: 110px;
  border-radius: 10px;
  margin: 0 auto;
  padding: 25px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${styleSet.colors.white};
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
    background: ${styleSet.colors.red};
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

export const Write = styled.div``;

export const H4 = styled.h4`
  font-size: ${styleSet.fontSize.s7};
  font-family: ${styleSet.font.B};
  padding: 40px 0 10px 0;
  border-bottom: 1px solid ${styleSet.colors.gray};
`;

export const Textarea = styled.div`
  border: 1px solid ${styleSet.colors.gray};
  border-radius: 10px;
  overflow: hidden;
  height: 130px;
  clear: both;
  button {
    float: right;
    background: ${styleSet.colors.black};
    color: ${styleSet.colors.white};
    padding: 5px 20px;
    border-radius: 15px;
    margin: 0 10px 0px 0;
  }
  textarea {
    resize: none;
    font-size: ${styleSet.fontSize.s9};
    font-family: Pretendard, "Malgun Gothic";
    padding: 15px;
    border: none;
    width: 100%;
    height: 70px;
    overflow: inherit;
    &:focus {
      outline: none;
    }
  }
`;

export const Wrapper3 = styled.div`
  width: 1400px;
  margin: 0 auto;
  box-shadow: 0 8px 20px rgb(0 0 0 / 5%);
  background: ${styleSet.colors.white};
  border-radius: 20px;
  padding: 30px;
`;

export const Comment = styled.section`
  background-color: #f4f5f9;
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

export const Contents = styled.p`
  padding-left: 75px;
  font-family: Pretendard, "Malgun Gothic";
  white-space: pre-wrap;
  font-size: ${styleSet.fontSize.s8};
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

export const Answer = styled.p`
  padding: 0 0 10px 75px;
  margin-top: 30px;
  color: ${styleSet.colors.darkgray};
  display: flex;
  gap: 10px;
  p {
    cursor: pointer;
    &:hover {
      color: ${styleSet.colors.black};
    }
  }
`;

export const Box = styled.section`
  border-bottom: 1px solid ${styleSet.colors.gray};
`;

// 대댓글 영역
export const AnswerBox = styled.section`
  padding: 20px 20px 20px 75px;
  background: #f4f5f9;
`;

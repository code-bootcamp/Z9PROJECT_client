import { EyeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { styleSet } from "../../../src/commons/styles/styleSet";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f4f5f9;
  padding-block: 100px;
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
    gap: 40px;
    position: relative;
    li {
      font-size: ${styleSet.fontSize.s7};
      font-family: ${styleSet.font.B};
      cursor: pointer;
      &:nth-child(1) {
        background-color: ${styleSet.colors.black};
        color: ${styleSet.colors.white};
        padding: 5px 20px;
        border-radius: 120px;
      }
    }
  }
  .ant-input-affix-wrapper {
    width: 30%;
    border-radius: 5px;
    height: 40px;
  }
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s1};
  font-family: ${styleSet.font.B};
  text-align: center;
  padding-block: 50px;
`;

export const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
`;

export const Main = styled.main`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 60px;
`;

export const Section = styled.section`
  cursor: pointer;
  width: 670px;
  height: 800px;
  overflow: hidden;
  border-radius: 4rem 1rem 1rem 1rem;
  position: relative;
  transition: padding 0.34s ease-in-out;
  border: 1px dashed #ccc;
  box-shadow: 0 0.8rem 2rem rgb(0 0 0 / 5%);
  &:hover .bg_layer {
    transition: 0.8s;
    opacity: 1;
  }
`;

export const User = styled.div`
  padding: 25px;
  width: 100%;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 4rem 1rem 0rem 0rem;
  img {
    width: 75px;
    height: 70px;
    border-radius: 50%;
    margin-right: 15px;
  }
`;

export const UserName = styled.p`
  font-size: ${styleSet.fontSize.s6};
`;

export const BgLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  opacity: 0;
`;

export const H2 = styled.h2`
  color: ${styleSet.colors.white};
  font-size: ${styleSet.fontSize.s2};
`;

export const ProdImg = styled.div`
  height: 450px;
  overflow: hidden;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
`;

export const PriceSale = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  border-radius: 0px 0px 0px 80px;
  background: ${styleSet.colors.primary};
  width: 100px;
  height: 100px;
  color: ${styleSet.colors.white};
  font-family: ${styleSet.font.B};
  font-size: ${styleSet.fontSize.s4};
`;

export const View = styled(EyeOutlined)`
  font-size: ${styleSet.fontSize.s7} !important;
`;

export const Bottom = styled.section`
  padding: 20px 25px;
  background: #fff;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  li {
    display: flex;
    align-items: center;
  }
  span {
    font-size: ${styleSet.fontSize.s9};
    margin-right: 10px;
  }
`;

export const Time = styled.li`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};
`;

export const ProdName = styled.h1`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.EB};
  padding-bottom: 20px;
`;

export const Price = styled.p`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  span {
    text-decoration-line: line-through;
    color: ${styleSet.colors.gray};
    font-size: ${styleSet.fontSize.s8};
  }
`;

export const New = styled.img`
  position: absolute;
  right: 5%;
  top: 3%;
`;

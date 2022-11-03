import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";

export const Container = styled.header`
  width: 100%;
  height: 100px;
  box-shadow: 0 0 8px 7px rgb(0 0 0 / 4%);
  position: fixed;
  z-index: 99999;
  background: #fff;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 250px;
  border-top: 1px solid ${styleSet.colors.black};
`;

export const Wrapper = styled.main`
  width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 50px;
  li {
    transition: 0.5s;
    &:hover {
      color: ${styleSet.colors.black};
    }
    font-size: ${styleSet.fontSize.s6};
    font-family: ${styleSet.font.B};
    cursor: pointer;
    color: ${styleSet.colors.darkgray};
    span {
      font-size: ${styleSet.fontSize.s9};
      padding-right: 15px;
    }
  }
`;

// Footer

export const Wrapper2 = styled.main`
  width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const TopBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  .none li {
    &:hover {
      color: ${styleSet.colors.darkgray};
    }
  }
`;
export const Top = styled.ul`
  display: flex;
  gap: 15px;
  li {
    font-family: ${styleSet.font.B};
    color: ${styleSet.colors.darkgray};
    cursor: pointer;
    &:hover {
      color: ${styleSet.colors.primary};
    }
  }
  strong {
    font-family: ${styleSet.font.EB};
    color: ${styleSet.colors.black};
    padding-right: 10px;
  }
`;

export const BottomBox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Bottom = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  li {
    font-size: 12px;
    color: ${styleSet.colors.darkgray};
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 10px;
  p {
    background-color: ${styleSet.colors.primary};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      height: 35px;
    }
  }
`;

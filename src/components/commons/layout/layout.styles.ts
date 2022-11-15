import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";
import { ILayoutStylesProps } from "./layout.types";

export const Container = styled.header`
  max-width: 100%;
  max-height: 100px;
  box-shadow: 0 0 8px 7px rgb(0 0 0 / 4%);
  position: fixed;
  z-index: 99999;
  background: #fff;
  position: relative;
  .logo {
    display: none;
  }
  @media ${styleSet.breakePoints.mobile} {
    .mobile {
      display: none;
    }
    .logo {
      display: block;
    }
    ul {
      width: 100%;
      justify-content: space-between;
    }
  }
  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
`;

export const Span = styled.span`
  strong {
    text-decoration-line: underline;
    text-underline-position: under;
  }
`;

export const P = styled.p`
  width: 40px;
  height: 3px;
  background: ${styleSet.colors.black};
  display: inline-block;
  position: relative;
  border-radius: 5px;

  &:after {
    content: "";
    width: 40px;
    height: 3px;
    background: ${styleSet.colors.black};
    display: inline-block;
    position: absolute;
    bottom: 15px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 15px;
    width: 40px;
    height: 3px;
    background: ${styleSet.colors.black};
    display: inline-block;
  }
`;

export const Hamburger = styled.div`
  background: ${styleSet.colors.white};
  min-width: 100%;
  height: 100vh;
  position: absolute;
  top: 100px;
  right: ${(props: ILayoutStylesProps) => (props.hamburger ? "0%" : "100%")};
  transition: 0.5s;
  padding: 20px;
  text-align: center;
  ul {
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid ${styleSet.colors.gray};
      padding: 10px 0;
      font-size: ${styleSet.fontSize.s8};
      font-family: ${styleSet.font.B};
      color: ${styleSet.colors.darkgray};
      padding-inline: 20px;
      &:nth-of-type(1) {
        border-bottom: none;
        margin: 0 auto;
        display: block;
        padding: 30px 0;
        background: ${styleSet.colors.primary};
        color: ${styleSet.colors.white};
        font-size: ${styleSet.fontSize.s6};
      }
    }
  }
`;

export const Mobile = styled.li`
  cursor: pointer;
  strong {
    text-decoration-line: underline;
    text-underline-position: under;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 250px;
  border-top: 1px solid ${styleSet.colors.black};

  @media ${styleSet.breakePoints.mobile} {
    min-width: 550px;
  }
`;

export const Wrapper = styled.main`
  max-width: 1460px;
  padding: 0 30px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  li {
    position: relative;
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

export const Ul2 = styled.ul`
  padding: 10px;
  width: 150px;
  height: 150px;
  background: ${styleSet.colors.white};
  border-radius: 10px;
  box-shadow: 0px 0px 5px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 60px;
  right: -5px;

  &::after {
    content: "";
    width: 15px;
    height: 15px;
    background: ${styleSet.colors.white};
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    position: absolute;
    transform: rotate(-135deg);
    top: -8px;
    right: 15px;
  }

  li {
    width: 100%;
    text-align: center;
    font-family: ${styleSet.font.L};
    font-size: ${styleSet.fontSize.s8};
    color: ${styleSet.colors.black};

    &:nth-last-of-type(1) {
      border-top: 1px solid ${styleSet.colors.lightGray};
      padding-top: 5px;
    }
    &:hover {
      color: ${styleSet.colors.primary};
      font-family: ${styleSet.font.B};
    }

    span {
      font-size: ${styleSet.fontSize.s8};
      padding: 0;
      cursor: default;
    }
  }
`;

export const LiPoint = styled.li`
  padding-bottom: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: 1px solid ${styleSet.colors.gray};
  span {
    padding: 0;
    font-family: ${styleSet.font.B};
    color: ${styleSet.colors.black};
    strong {
      font-family: ${styleSet.font.B};
      font-size: ${styleSet.fontSize.s8};
    }
  }
  &:hover {
    background: none;
  }
`;
export const LiPointM = styled.li`
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    div {
      font-family: ${styleSet.font.L};
      color: ${styleSet.colors.black};
    }
  }

  span {
    padding: 0;
    font-family: ${styleSet.font.B};
    color: ${styleSet.colors.black};
    font-size: ${styleSet.fontSize.s7};
    strong {
      font-family: ${styleSet.font.B};
      font-size: ${styleSet.fontSize.s10};
    }
  }
  &:hover {
    background: none;
  }
`;

export const Wrapper2 = styled.main`
  max-width: 1460px;
  height: 100%;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
  }
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

  @media ${styleSet.breakePoints.mobile} {
    flex-direction: column;
    padding-bottom: 10px;
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

  @media ${styleSet.breakePoints.mobile} {
    margin-top: 10px;
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
  a {
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

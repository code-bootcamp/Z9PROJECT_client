import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";

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
    min-width: 500px;
    .mobile {
      display: none;
    }
    .logo {
      display: block;
    }
    ul {
      justify-content: space-between;
      min-width: 500px;
    }
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
  right: ${(props: any) => (props.hamburger ? "0%" : "100%")};
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

export const Footer = styled.footer`
  width: 100%;
  height: 250px;
  border-top: 1px solid ${styleSet.colors.black};
`;

export const Wrapper = styled.main`
  max-width: 1460px;
  padding: 0 30px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${styleSet.breakePoints.mobile} {
    min-width: 550px;
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
    min-width: 550px;
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

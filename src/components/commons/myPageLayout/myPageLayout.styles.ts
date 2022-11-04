import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";

// container

export const Container = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  width: 1400px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

// presenter

export const PreContainer = styled.div`
  margin: 0 auto;
  padding: 50px 20px 0 0;
  width: 200px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.h1`
  padding-bottom: 10px;
  font-family: ${styleSet.font.EB};
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

export const Btn = styled.button`
  font-size: ${styleSet.fontSize.s6};
`;

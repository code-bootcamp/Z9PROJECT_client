import styled from "@emotion/styled";
import { styleSet } from "../../../commons/styles/styleSet";
import { IBtnProps } from "./myPageLayout.types";

// container

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1460px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
    flex-direction: column;
  }
`;

// presenter

export const PreContainer = styled.div`
  margin: 0 auto;
  padding: 50px 50px 0 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${styleSet.breakePoints.mobile} {
    width: 100%;
    padding: 50px 0 0 0;
    align-items: center;
  }
`;

export const Title = styled.h1`
  padding-bottom: 10px;
  min-width: 182px;
  font-size: ${styleSet.fontSize.s4};
  font-family: ${styleSet.font.EB};
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  @media ${styleSet.breakePoints.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    .point {
      width: ${(P: IBtnProps) => (P.nowUrl.length === 13 ? "100%" : null)};
      background: ${(P: IBtnProps) =>
        P.nowUrl.length === 13 ? `${styleSet.colors.subcolor1}` : null};
      color: ${(P: IBtnProps) =>
        P.nowUrl.length === 13 ? `${styleSet.colors.white}` : null};
    }
    .wish {
      width: ${(P: IBtnProps) => (P.nowUrl.includes("wish") ? "100%" : null)};
      background: ${(P: IBtnProps) =>
        P.nowUrl.includes("wish") ? `${styleSet.colors.subcolor1}` : null};
      color: ${(P: IBtnProps) =>
        P.nowUrl.includes("wish") ? `${styleSet.colors.white}` : null};
    }
    .sales {
      width: ${(P: IBtnProps) => (P.nowUrl.includes("sales") ? "100%" : null)};
      background: ${(P: IBtnProps) =>
        P.nowUrl.includes("sales") ? `${styleSet.colors.subcolor1}` : null};
      color: ${(P: IBtnProps) =>
        P.nowUrl.includes("sales") ? `${styleSet.colors.white}` : null};
    }
    .purchase {
      width: ${(P: IBtnProps) =>
        P.nowUrl.includes("purchase") ? "100%" : null};
      background: ${(P: IBtnProps) =>
        P.nowUrl.includes("purchase") ? `${styleSet.colors.subcolor1}` : null};
      color: ${(P: IBtnProps) =>
        P.nowUrl.includes("purchase") ? `${styleSet.colors.white}` : null};
    }
    .qna {
      width: ${(P: IBtnProps) => (P.nowUrl.includes("qna") ? "100%" : null)};
      background: ${(P: IBtnProps) =>
        P.nowUrl.includes("qna") ? `${styleSet.colors.subcolor1}` : null};
      color: ${(P: IBtnProps) =>
        P.nowUrl.includes("qna") ? `${styleSet.colors.white}` : null};
    }
    .edit {
      width: ${(P: IBtnProps) => (P.nowUrl.includes("edit") ? "100%" : null)};
      background: ${(P: IBtnProps) =>
        P.nowUrl.includes("edit") ? `${styleSet.colors.subcolor1}` : null};
      color: ${(P: IBtnProps) =>
        P.nowUrl.includes("edit") ? `${styleSet.colors.white}` : null};
    }
  }
`;

export const Btn = styled.button`
  font-size: ${styleSet.fontSize.s8};
`;

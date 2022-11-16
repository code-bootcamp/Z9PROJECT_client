import { css } from "@emotion/react";
import { styleSet } from "./styleSet";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  html,
  body {
    padding: 0;
    @media ${styleSet.breakePoints.mobile} {
      min-width: 600px;
      height: 100%;
    }
    .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
    .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner,
    .ant-picker-content td::selection {
      background: ${styleSet.colors.primary};
    }

    .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before,
    .ant-picker-cell-in-view.ant-picker-cell-in-range::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single)::before {
      background: ${styleSet.colors.subcolor5};
    }
    .ant-picker-cell-in-view.ant-picker-cell-today
      .ant-picker-cell-inner::before {
      border: 1px solid ${styleSet.colors.primary};
    }
    margin: 0;
    font-family: NanumSquareRound, -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin: 0;
    margin-bottom: 0;
  }
  ul,
  ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  button {
    border: none;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
  }
`;

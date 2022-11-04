import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  html,
  body {
    padding: 0;
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

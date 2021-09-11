import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: top;
  }
`;

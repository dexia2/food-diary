
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 400;
    line-height: 1;
  }

  *,
  ::before,
  ::after {
    background-repeat: no-repeat;
    box-sizing: inherit;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  * {
    padding: 0;
    margin: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border-style: none;
    color: inherit;
  }

`;

export default GlobalStyle;
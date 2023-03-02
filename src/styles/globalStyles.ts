import { createGlobalStyle } from 'styled-components'
import variables from './variables'

export const GlobalStyles = createGlobalStyle`
  ${variables}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
    height: 100%;
  }

  body {
    overflow-x: hidden;
    height: 100%;
    background-color: var(--white-color);
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  div#root {
    height: 100%;
  }
`

import { createGlobalStyle } from 'styled-components'
import variables from './variables'

export const GlobalStyles = createGlobalStyle`
  ${variables}

  ;

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
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
    transition: var(--transition);
  }

  button {
    cursor: pointer
  }
`

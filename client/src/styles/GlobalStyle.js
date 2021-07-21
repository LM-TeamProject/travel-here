import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import greetingcard from '../images/bg.png';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
      box-sizing : border-box;
  }

  body {
  background : url(${greetingcard}) no-repeat center center fixed;
  background-size: cover;
  }

  a {
    text-decoration : none;
  }

`;

export default GlobalStyle;

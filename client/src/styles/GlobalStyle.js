<<<<<<< HEAD
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import greetingcard from '../images/bg.png';
=======
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
>>>>>>> 6199f41df51c39da4181c468518af7157d044d83

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

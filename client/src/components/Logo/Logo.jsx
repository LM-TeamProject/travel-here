import React from 'react'
import * as S from "./Logo.style";
import logo from "assets/images/logo.png";
import { useHistory } from "react-router";

// logo Image

export default function Logo() {
  
  const history = useHistory();

  const onLogoClick = () => {
    history.push({
      pathname: '/',
    })
  }

  return (
    <S.Container>
      <S.Img src={logo} alt="Logo" onClick={onLogoClick}/>
    </S.Container>
  );
}

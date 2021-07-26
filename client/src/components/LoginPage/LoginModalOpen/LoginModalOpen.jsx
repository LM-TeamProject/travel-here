import React from 'react';
import * as S from './LoginModalOpen.style';
import LoginHeader from '../header/LoginHeader';
import LoginFooter from '../footer/LoginFooter';

function LoginModalOpen() {
  return (
    <>
      <S.LoginBg className="login-bg"></S.LoginBg>
      <S.Logincontainer className="login-container">
        <LoginHeader />
        <LoginFooter />
      </S.Logincontainer>
    </>
  );
}

export default LoginModalOpen;

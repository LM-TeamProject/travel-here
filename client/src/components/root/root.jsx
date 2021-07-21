import React from 'react';
import logo from '../../images/logo.png';
import * as S from './root.style';

function Root() {
  return (
    <>
      <hearder>
        <S.Ul className="container">
          <h1 className="logo">
            <S.Img src={logo} alt="Logo" />
          </h1>
          <S.Button>
            <i class="fas fa-bars"></i>
          </S.Button>
        </S.Ul>
      </hearder>
    </>
  );
}

export default Root;

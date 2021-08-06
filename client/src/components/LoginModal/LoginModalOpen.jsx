import React, { useEffect, useState } from 'react';
import * as S from './LoginModalOpen.style';
import LoginHeader from 'components/LoginModal/header/LoginHeader';
import LoginFooter from 'components/LoginModal/footer/LoginFooter';
import AuthService from 'auth_service';
import firebaseService from 'firebase';
import LogoutPage from './LogoutPage/LogoutPage';
// import Hero from './Hero/Hero';

function LoginModalOpen() {
  const authService = new AuthService();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  // 로그인
  const handleLogin = () => {
    clearErrors();
    firebaseService
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  // 회원가입
  const handleSignUP = () => {
    clearErrors();
    firebaseService
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  // 로그아웃
  const handleLogout = () => {
    firebaseService.auth().signOut();
  };

  const authListener = () => {
    firebaseService.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      {user ? (
        <LogoutPage handleLogout={handleLogout} />
      ) : (
        // <Hero handleLogout={handleLogout} />
        // <LoginHeader routeChange={routeChange} handleLogout={handleLogout} />
        // <Logout onClick={routeChange} handleLogout={handleLogout} />
        <>
          <S.LoginBg></S.LoginBg>
          <S.Logincontainer>
            <LoginHeader
              authService={authService}
              user={user}
              setUser={setUser}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignUP={handleSignUP}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />
            <LoginFooter authService={authService} />
          </S.Logincontainer>
        </>
      )}
    </>
  );
}

export default LoginModalOpen;
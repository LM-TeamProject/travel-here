// react
<<<<<<< HEAD
import { exact } from 'prop-types';
import React, { component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Root from './components/root/root.jsx';
import GlobalStyle from './styles/GlobalStyle';
=======
import React from "react";

// style
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import * as S from "./styles/Background";
>>>>>>> 6199f41df51c39da4181c468518af7157d044d83

// router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryList from "./pages/CategoryList";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Switch path={['/', '/root']} exact>
          <Root />
        </Switch>
      </div>
    </BrowserRouter>
=======
    <S.Background className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/categorylist" component={CategoryList} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </S.Background>
>>>>>>> 6199f41df51c39da4181c468518af7157d044d83
  );
}

export default App;

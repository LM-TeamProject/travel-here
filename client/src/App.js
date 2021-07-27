// react
import React from "react";

// style
import GlobalStyle from "styles/GlobalStyle";
import Header from "components/Header/Header";
import * as S from "styles/Background";

// router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryList from "pages/CategoryList";
import Board from 'pages/Board'
import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Post from 'pages/Post/Post';

function App() {  
  return (
    <S.Background className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/categorylist" component={CategoryList} />
          <Route path="/categorylist/:religion" component={Board} />
          <Route path="/post" component={Post} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </S.Background>
  );
}

export default App;

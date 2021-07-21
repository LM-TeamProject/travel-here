// react
import { exact } from 'prop-types';
import React, { component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Root from './components/root/root.jsx';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle />
        <Switch path={['/', '/root']} exact>
          <Root />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

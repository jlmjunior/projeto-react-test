import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css'

import theme from './temaConfig'
import { ThemeProvider } from '@material-ui/core';
import Home from './componentes/pages/Home';
import GlobalContext from './context/GlobalContext'
import Carregamento from './componentes/all/Carregamento';

function App() {
  return (
    <GlobalContext>
      <Carregamento />
      <ThemeProvider theme={theme}>
        <BrowserRouter>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>

        </BrowserRouter>
      </ThemeProvider>
    </GlobalContext>
  );
}

export default App;

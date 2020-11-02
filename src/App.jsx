import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import theme from './temaConfig'
import { ThemeProvider } from '@material-ui/core';
import Home from './componentes/pages/home';
import GlobalContext from './context/GlobalContext'

function App() {
  return (
    <GlobalContext>
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

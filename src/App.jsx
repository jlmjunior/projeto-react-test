import React from 'react';

import theme from './temaConfig'
import { ThemeProvider } from '@material-ui/core';
import Container from './componentes/corpo/Container'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
}

export default App;

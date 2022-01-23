import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

const theme = extendTheme({
  colors: {
    propulsion: {
      primary: '#f5f5f5',
      secondary: '#ffffff',
      thirdy: '#040320',
    },
  },
  breakpoints,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

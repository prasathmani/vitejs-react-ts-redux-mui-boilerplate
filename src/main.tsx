import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import { store } from './redux/store';
import { theme } from './constants/theme';
import Router from './router';

import './styles/app.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVarsProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>
);

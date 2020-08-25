// eslint-disable react/jsx-filename-extension
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import { mainTheme } from './themes/main';
import { Router } from './router';
import { store } from './store';
import Loader from './components/base/Loader';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
          <Loader />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

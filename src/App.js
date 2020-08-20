import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import { mainTheme } from './themes/main';
import { Router } from './router';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

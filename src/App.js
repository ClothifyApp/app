import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import { mainTheme } from './themes/main';
import { Router } from './router';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

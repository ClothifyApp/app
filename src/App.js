import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import { Router } from './router';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  );
}

export default App;

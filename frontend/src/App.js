import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';

import Header from './components/Header/Header';
import NewProvider from './context/NewProvider';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NewProvider>
        <Routes />
      </NewProvider>
    </BrowserRouter>
  );
}

export default App;

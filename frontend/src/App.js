import { BrowserRouter } from 'react-router-dom';

import React from 'react';

import Header from './components/Header/Header';
import NewProvider from './context/NewProvider';
import UfsProvider from './context/UfsProvider';
import UsersProvider from './context/UsersProvider';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes'

function App() {
  return (
    <BrowserRouter> 
      <UsersProvider>
        <NewProvider>
          <UfsProvider>
          <Header />
            <Routes />
          </UfsProvider>
        </NewProvider>
      </UsersProvider>  
    </BrowserRouter>
  );
}

export default App;

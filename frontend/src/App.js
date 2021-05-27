import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import NewsList from './components/NewsList/NewsList';
import NewDetails from './components/NewDetails/NewDetails';
import Login from './components/Login/Login';
import CreateNews from './components/CreateNews/CreateNews';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import './App.css';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3003/news')
      .then((response) => {
        setNews(response.data);
      })
      .catch((err) => {
        console.log(`Erro: ${err}`);
      });
  });

  return (
    <BrowserRouter>
        <Header />

        <Switch>
          <Redirect from="/" to="/news" exact />
          <Route path="/news" exact>
            <NewsList news={news}></NewsList>
          </Route>

          <Route path="/news/:id" exact>
            <NewDetails />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/create-news" exact>
            <CreateNews />
          </Route>

          <Route render={() => <div> Pagina não encontrada </div>} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

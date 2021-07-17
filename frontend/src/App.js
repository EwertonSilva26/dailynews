import { BrowserRouter } from "react-router-dom";

import React from "react";

import Header from "./components/Header/Header";
import NewProvider from "./context/NewProvider";
import UfsProvider from "./context/UfsProvider";
import UsersProvider from "./context/UsersProvider";
import LoginProvider from "./context/LoginProvider";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <UsersProvider>
          <NewProvider>
            <UfsProvider>
              <Header />
              <Routes />
            </UfsProvider>
          </NewProvider>
        </UsersProvider>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
  const [token, setToken] = useState("");
  // const [uf, setUf] = useState(0);

  const loginValidation = (email, password) => {
    // setUf(event);
  };

  const registerUser = (email, password) => {
    console.log(token);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3003/news")
      .then((response) => {
        setToken(response.data);
      })
      .catch((err) => {
        console.log(`Erro: ${err}`);
      });
  });

  return (
    <LoginContext.Provider
      value={{ 
        loginValidation: loginValidation,
        registerUser: registerUser
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;

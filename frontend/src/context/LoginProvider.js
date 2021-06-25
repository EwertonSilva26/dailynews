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
    // setUf(event);
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
        loginValidation: loginValidation,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;

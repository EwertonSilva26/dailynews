import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginProvider";

import { useHistory } from "react-router-dom";

function Login() {
  const { authUser } = useContext(LoginContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let [error, setError] = React.useState("");

  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    const object = {
      email: event.target[0].value,
      password: event.target[1].value,
    };

    axios
      .post("http://localhost:3003/login", object)
      .then((response) => {
        if (response.status === 200) {
          authUser(response.data);
          setError("");

          setTimeout(() => {
            history.push("/news");
          }, 200);
        } else {
          console.log("erro");
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  }

  return (
    <div className="login">
      <Form onSubmit={handleSubmit}>
        <div>
          <h1>Entrar</h1>
          <span>Insira seus dados para continuar</span>
        </div>
        <Form.Group size="lg" controlId="email">
          <Form.Control autoFocus type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control type="password" value={password} placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
          <span className="error-message">{error}</span>
        </Form.Group>

        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;

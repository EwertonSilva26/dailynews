import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css';

import { useContext } from 'react';
import { LoginContext } from '../../context/LoginProvider'


function Login() {
  // const { loginValidation } = useContext(LoginContext); 

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function validateForm() {
    // loginValidation(email, password);

  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="login">
      <Form onSubmit={handleSubmit}>
        <div>
          <h1>Entrar</h1>
          <span>Insira seus dados para continuar</span>
        </div>
        <Form.Group size="lg" controlId="email">
          <Form.Control
            autoFocus
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Control
            type="password"
            value={password}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './CreateNews.css';

function CreateNews() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="create-news-body">
      <div className="create-news-container">
        <Form onSubmit={handleSubmit}>
          <div>
            <h1>Cadastro de Notícias</h1>
            <span>
              Insira as informações referentes a notícia para continuar
            </span>
          </div>
          <Form.Group size="lg" controlId="title" className="create-news-form">
            <Form.Control
              autoFocus
              type="text"
              value={email}
              placeholder="Insira o título da notícia"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="description">
            <Form.Control
              as="textarea"
              rows="5"
              value={password}
              placeholder="Descrição"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.File id="imagem" label="Insira uma imagem" />
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Cadastrar Notícia
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateNews;

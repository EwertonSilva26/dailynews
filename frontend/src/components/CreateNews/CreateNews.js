import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { UfsContext } from "../../context/UfsProvider";
import { LoginContext } from "../../context/LoginProvider";

import "./CreateNews.css";

function CreateNews(props) {
  const { token } = useContext(LoginContext);
  const { ufs } = useContext(UfsContext);
  let [error, setError] = useState("");
  let history = useHistory();

  function validateForm(event) {
    let hasError = 0;

    error = "";

    if (event.target[0].value.length === 0) {
      setError((error += "O campo título é obrigatório! "));
      hasError++;
    }

    if (event.target[1].value.length === 0) {
      setError((error += "O campo subtítulo é obrigatório! "));
      hasError++;
    }

    if (event.target[3].value.length === 0) {
      setError((error += "O campo conteúdo é obrigatório! "));
      hasError++;
    }

    if (event.target[4].value.length === 0) {
      setError((error += "O campo imagem é obrigatório! "));
      hasError++;
    }

    return hasError > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm(event)) {
      return;
    }

    const object = {
      user_id: token.user_id,
      title: event.target[0].value,
      subtitle: event.target[1].value,
      uf_id: event.target[2].value,
      content: event.target[3].value,
      image: event.target[4].value,
    };

    axios
      .post("http://localhost:3003/news", object, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((response) => {});

    setTimeout(() => {
      history.push("/news");
    }, 200);
  }

  return (
    <div className="create-news-body">
      <div className="create-news-container">
        <Form onSubmit={handleSubmit}>
          <div>
            <h1>Cadastro de Notícias</h1>
            <span>Insira as informações referentes a notícia para continuar</span>
          </div>
          <Form.Group size="lg" controlId="title" className="create-news-form">
            <Form.Control autoFocus type="text" placeholder="Insira o título da notícia" maxLength="500" />
          </Form.Group>
          <Form.Group size="lg" controlId="subtitle" className="create-news-form subtitle" maxLength="1000">
            <Form.Control autoFocus type="text" placeholder="Insira o subtítulo da notícia" />
            <Form.Control as="select">
              {ufs.map((uf) => {
                return (
                  <option value={uf.uf_id} key={uf.uf_id}>
                    {uf.uf_name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group size="lg" controlId="content">
            <Form.Control as="textarea" rows="5" placeholder="Descrição" />
          </Form.Group>
          <Form.Group size="lg" controlId="image" className="create-news-form">
            <Form.Control autoFocus type="text" placeholder="Insira o url da imagem" maxLength="300" />
          </Form.Group>
          {/* <Form.File id="imagem" label="Insira uma imagem" /> */}
          <span className="error-message">{error}</span>

          <Button block size="lg" type="submit">
            Cadastrar Notícia
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreateNews;

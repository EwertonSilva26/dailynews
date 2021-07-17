import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { useContext, useState, useEffect } from "react";
import { UfsContext } from "../../context/UfsProvider";
import { LoginContext } from "../../context/LoginProvider";

import "./EditNews.css";

function EditNews() {
  const { token } = useContext(LoginContext);
  const [info, setInfo] = useState({});

  const { id } = useParams();

  const { ufs } = useContext(UfsContext);
  let [error, setError] = useState("");

  let history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:3003/news/" + id)
      .then((response) => {
        setInfo(response.data[0]);
      })
      .catch((err) => {
        console.log(`Erro: ${err.message}`);
      });
  });

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
      user_id: 1,
      title: event.target[0].value,
      subtitle: event.target[1].value,
      uf_id: event.target[2].value,
      content: event.target[3].value,
      image: event.target[4].value,
    };

    axios
      .put("http://localhost:3003/news/" + id, object, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
      });

    setTimeout(() => {
      history.push("/news");
    }, 200);
  }

  return (
    <div className="edit-news-body">
      <div className="edit-news-container">
        <Form onSubmit={handleSubmit}>
          <div>
            <h1>Editar Notícia</h1>
            <span>Insira as informações referentes a notícia para continuar</span>
          </div>
          <Form.Group size="lg" controlId="title" className="edit-news-form">
            <Form.Control autoFocus type="text" placeholder="Insira o título da notícia" maxLength="500" defaultValue={info.title} />
          </Form.Group>
          <Form.Group size="lg" className="edit-news-form subtitle" maxLength="1000">
            <Form.Control autoFocus type="text" id="subtitle" placeholder="Insira o subtítulo da notícia" defaultValue={info.subtitle} />
            <Form.Control as="select" id="select">
              {ufs.map((uf) => {
                if (uf.uf_id === info.uf_id) {
                  return (
                    <option value={uf.uf_id} key={uf.uf_id} defaultValue>
                      {uf.uf_name}
                    </option>
                  );
                }
                return (
                  <option value={uf.uf_id} key={uf.uf_id}>
                    {uf.uf_name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group size="lg" controlId="content">
            <Form.Control as="textarea" rows="5" placeholder="Descrição" defaultValue={info.content} />
          </Form.Group>
          <Form.Group size="lg" controlId="image" className="edit-news-form">
            <Form.Control autoFocus type="text" placeholder="Insira o url da imagem" maxLength="300" defaultValue={info.image} />
          </Form.Group>
          {/* <Form.File id="imagem" label="Insira uma imagem" /> */}
          <span className="error-message">{error}</span>

          <Button block size="lg" type="submit">
            Editar Notícia
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditNews;

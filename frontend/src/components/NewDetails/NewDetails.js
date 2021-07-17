import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import axios from "axios";

import { useContext, useState, useEffect } from "react";
import React from "react";

import { LoginContext } from "../../context/LoginProvider";

import "./NewDetails.css";

function NewDetails() {
  const { token } = useContext(LoginContext);
  const [info, setInfo] = useState({});

  const { id } = useParams();

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

  function deleteNews() {
    axios
      .delete("http://localhost:3003/news/" + id, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(`Erro: ${err.message}`);
      });
  }

  return (
    <div className="body">
      <div className="content">
        <h1>{info.title}</h1>
        <span>{info.uf_name}</span>
        <span>Autor: {info.user_name}</span>
        <span>Publicado em: {info.created_date}</span>
        <img src={info.image} alt={`Imagem referente a seguinte noticia ${info.title}`}></img>
        <p>{info.content}</p>
        {token && info.user_id === token.user_id && (
          <div className="buttons">
            <NavLink to={"/news/" + id + "/edit"} exact>
              <Button block size="lg" id="editar">
                Editar
              </Button>
            </NavLink>

            <NavLink to="/news" exact>
              <Button
                size="lg"
                id="excluir"
                variant="danger"
                onClick={() => {
                  deleteNews();
                }}
              >
                Excluir
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewDetails;

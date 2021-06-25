import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import axios from "axios";

import { useState, useEffect } from "react";
import React from "react";

// import { UfsContext } from '../../context/UfsProvider'
//import { UsersContext } from '../../context/UsersProvider'

import "./NewDetails.css";

function NewDetails() {
  const [info, setInfo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3003/news/" + id)
      .then((response) => {
        setInfo(response.data[0]);
      })
      .catch((err) => {
        console.log(`Erro: ${"Entrou no erro: " + err.message}`);
      });
  });

  function deleteNews() {
    axios
      .delete("http://localhost:3003/news/" + id)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(`Erro: ${"Entrou no erro: " + err.message}`);
      });
  }

  return (
    <div className="body">
      <div className="content">
        <h1>{info.title}</h1>
        <span>{info.uf_name}</span>
        <span>Autor: {info.user_name}</span>
        <span>Publicado em: {info.created_date}</span>
        <img
          src={info.image}
          alt={`Imagem referente a seguinte noticia ${info.title}`}
        ></img>
        <p>{info.content}</p>
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
      </div>
    </div>
  );
}

export default NewDetails;

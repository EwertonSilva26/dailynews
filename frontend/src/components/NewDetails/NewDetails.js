import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useState, useEffect } from 'react';
import React from 'react';

// import { UfsContext } from '../../context/UfsProvider'
//import { UsersContext } from '../../context/UsersProvider'

import './NewDetails.css';

function NewDetails() {
  const [info, setInfo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:3003/news/' + id)
      .then((response) => {
        setInfo(response.data[0]);
      })
      .catch((err) => {
        console.log(`Erro: ${'Entrou no erro: ' + err.message}`);
      });
  });

  return (
    <div className="body">
      <div className="content">
        <h1>{info.title}</h1>
        <span>{info.ufName}</span>
        <span>Autor: {info.userName}</span>
        <span>Publicado em: {info.created}</span>
        <img src={info.image}
          alt={`Imagem referente a seguinte noticia ${info.title}`}>
        </img>
        <p>{info.textNew}</p>
      </div>
    </div>
  );
}

export default NewDetails;

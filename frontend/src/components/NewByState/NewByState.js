import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useState, useEffect } from 'react';

import React from 'react';

//import './NewByState.css';

function NewByState() {
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
        <span>Autor:</span>
        <span>Publicado em:</span>
        <img src={info.image}></img>
        <p>{info.textNew}</p>
      </div>
    </div>
  );
}

export default NewByState;

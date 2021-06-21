import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useContext, useState, useEffect } from 'react';
import React from 'react';

import { UfsContext } from '../../context/UfsProvider'
import { UsersContext } from '../../context/UsersProvider'

import './NewDetails.css';

function NewDetails() {
  const [info, setInfo] = useState({});

  const { id } = useParams();
  const { ufs } = useContext(UfsContext); 
  const { users } = useContext(UsersContext); 

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
        <span>{ufs.map(uf => { if(uf.idUf === info.uf) return uf.ufName })}</span>
        <span>Autor: {users.map(user => { if(user.idUser === info.author) return user.username })}</span>
        <span>Publicado em:</span>
        <img src={info.image}></img>
        <p>{info.textNew}</p>
      </div>
    </div>
  );
}

export default NewDetails;

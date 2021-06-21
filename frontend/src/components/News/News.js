import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UfsContext } from '../../context/UfsProvider'

import './News.css';

const News = ({ props }) => {
    
  const { ufs } = useContext(UfsContext); 

  return (
    <Card className="news-card">
     
      <Card.Img variant="top" src={props.image} alt=" "/>

      <Card.Body>
        <Card.Title>{props.title} | <span>{ufs.map(uf => { if(uf.idUf === props.uf) return uf.ufName })}</span></Card.Title>
        <Card.Text>{props.textNew}</Card.Text>
        <Link to={'/news/' + props.idNew} className="card-link">
          <Button variant="primary">Ir para notícia</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;

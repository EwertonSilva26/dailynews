import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './News.css';

const News = ({ props }) => {
  return (
    <Card className="news-card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.textNew}</Card.Text>
        <Link to={'/news/' + props.idNew} className="card-link">
          <Button variant="primary">Ir para notícia</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;

import { Card, Button } from 'react-bootstrap';
import './NewsCard.css';

import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  return (
    <div>
      {news.map((item) => {
        return (
          <Card className="news-card">
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Link to={'/news/'+item.id}><Button variant="primary">Ir para notícia</Button></Link>
            </Card.Body>
          </Card>
        );
      })}

    </div>
  );
};

export default NewsCard;

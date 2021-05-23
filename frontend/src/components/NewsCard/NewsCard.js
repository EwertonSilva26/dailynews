import { Card, Button } from 'react-bootstrap';
import './NewsCard.css';

import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  return (
    <div>
      {news.map((item) => {
        return (
          <Card key={news.idNew} className="news-card">
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.textNew}</Card.Text>
              <Link to={'/news/'+item.idNew}><Button variant="primary">Ir para notícia</Button></Link>
            </Card.Body>
          </Card>
        );
      })}

    </div>
  );
};

export default NewsCard;

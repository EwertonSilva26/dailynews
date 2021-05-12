import { Card, Button } from 'react-bootstrap';
import './NewsCard.css';

const NewsCard = ({ news }) => {
  return (
    <div>
      {news.map((prop) => {
        return (
          <Card className="news-card">
            <Card.Img variant="top" src={prop.image} />
            <Card.Body>
              <Card.Title>{prop.title}</Card.Title>
              <Card.Text>{prop.text}</Card.Text>
              <Button variant="primary">Ir para notícia</Button>
            </Card.Body>
          </Card>
        );
      })}

    </div>
  );
};

export default NewsCard;

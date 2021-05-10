import { Card, Button } from 'react-bootstrap';
import './NewsCard.css';

const NewsCard = (props) => {
  return (
    <Card className="news-card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Ir para notícia</Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;

import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UfsContext } from "../../context/UfsProvider";

import "./News.css";

const News = ({ props }) => {
  const { ufs } = useContext(UfsContext);

  return (
    <Card className="news-card">
      <Card.Img variant="top" src={props.image} alt=" " />

      <Card.Body>
        <Card.Title>
          {props.title} |{" "}
          <span>
            {ufs.map((uf) => {
              if (uf.uf_id === props.uf_id) {
                return uf.uf_name;
              } else {
                return "";
              }
            })}
          </span>
        </Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Link to={"/news/" + props.news_id} className="card-link">
          <Button variant="primary">Ir para notícia</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;

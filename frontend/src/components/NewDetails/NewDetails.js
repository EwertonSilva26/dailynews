import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import React from 'react';


function NewDetails() {

    const [info, setInfo] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3003/news/' + id)
            .then((response) => {
                setInfo(response.data[0]);
            }).catch((err) => {
                console.log(`Erro: ${"Entrou no erro: " + err.message}`);
            })
    });

    return (
        <div>
            <h2>{info.title}</h2>
            <Card className="news-card">
                <Card.Img variant="top" src={info.image} />
                <Card.Body>
                    <Card.Text>{info.textNew}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default NewDetails;
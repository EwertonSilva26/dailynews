import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const NewDetails = () => {

    //Tentei fazer a buscar por id, mas sabosta não funciona

    
    const [news, setNews] = useState([]);
    
    //Retorna o id
 
   const { id } = useParams();


    // useEffect(() => {
    //   axios.get('http://localhost:3003/news/'+id)
    //     .then((response) => {
    //         setNews(response.data);
    //     }).catch((err) => {
    //       console.log(`Erro: ${err}`);
    //     })
    // });

    
    return (
        <div>
            <p>Noticia numero - {id}</p>
            {/* <p>{news}</p> */}
        </div>
    )
}

export default NewDetails;
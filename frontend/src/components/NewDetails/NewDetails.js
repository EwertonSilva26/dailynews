import React from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

// import { useState, useEffect } from 'react';
// import New from '../New/New';

const NewDetails = () => {

    //Tentei fazer a buscar por id, mas sabosta não funciona

    // const [noticia, setNoticia] = useState([]);
    //Retorna o id
 
   const { id } = useParams();


    // useEffect(() => {
    //   axios.get('http://localhost:3003/news/'+id)
    //     .then((response) => {
    //         console.log("Response: " + response.data.title);
    //         setNoticia(response.data.title);
    //     }).catch((err) => {
    //       console.log(`Erro: ${err}`);
    //     })
    // });

    
    return (
        <div>
            <p>Noticia numero - {id}</p>
            {/* <New props={noticia}></New> */}
        </div>
    )
}

export default NewDetails;
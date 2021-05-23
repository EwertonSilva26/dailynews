import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewDetails = () => {

    //Retorna o id
    const { id } = useParams();

    useEffect(() => {
        //Faria uma busca no banco de dados utilizando o id
    }, [])


    
    return (
        <div>
            <p>Noticia numero - {id}</p>
        </div>
    )
}

export default NewDetails;
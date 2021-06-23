import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UfsContext = React.createContext();


const UfsProvider = (props) => {
    const [ufs, setUfs] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3003/ufs')
            .then((response) => {
                setUfs(response.data);
            })
            .catch((err) => {
                console.log(`Erro: ${err}`);
            });
    });

    return (
        <UfsContext.Provider value={{ ufs: ufs }}>
            {props.children}
        </UfsContext.Provider>
    );

}
export default UfsProvider;
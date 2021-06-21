import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UfsContext = React.createContext();


const UfsProvider = (props) => {
    const [ufs, setUfs] = useState([]);
    const [uf, setUf] = useState(0);

    const selectUf = (event) => {
        ufs.map((uf) => {
            if(uf.ufName === event) { setUf(uf.idUf); }        
        })  
    }

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
        <UfsContext.Provider value={{uf: uf, ufs: ufs, selectUf: selectUf}}>
            {props.children}
        </UfsContext.Provider>
    );

}
export default UfsProvider;
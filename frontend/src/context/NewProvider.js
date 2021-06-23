import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const NewContext = React.createContext();

const NewProvider = (props) => {
    const [news, setNews] = useState([]);
    const [uf, setUf] = useState(0);

    const selectUf = (event) => {
        setUf(event);
    }

    useEffect(() => {

        if (uf === 0) {
            axios.get('http://localhost:3003/news')
                .then((response) => {
                    setNews(response.data);
                })
                .catch((err) => {
                    console.log(`Erro: ${err}`);
                });
        } else {
            axios.get(`http://localhost:3003/news/uf/${uf}`)
                .then((response) => {
                    setNews(response.data);
                })
                .catch((err) => {
                    console.log(`Erro: ${err}`);
                });
        }
    });

    /*const getAllNew = () => {
        return 
    }*/


    return (
        <NewContext.Provider value={{ news: news, selectUf: selectUf }}/*value={{ livros: livros, insereLivro, deleteLivro, atualizaLivro }} */>
            {props.children}
        </NewContext.Provider>
    );

}
export default NewProvider;
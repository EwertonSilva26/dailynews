import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UsersContext = React.createContext();


const UsersProvider = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3003/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((err) => {
                console.log(`Erro: ${err}`);
            });
    });


    return (
        <UsersContext.Provider value={{users: users}}>
            {props.children}
        </UsersContext.Provider>
    );

}
export default UsersProvider;
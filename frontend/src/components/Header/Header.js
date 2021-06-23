import React from 'react';
import { Form, Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { UfsContext } from '../../context/UfsProvider'
import { NewContext } from '../../context/NewProvider'

import './Header.css';

// var teste = "";
const style = {
  marginRight: '10px',
};

function Header() {
  const { ufs } = useContext(UfsContext); 
  const { selectUf } = useContext(NewContext); 


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/news">DailyNews</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/news">Início</Nav.Link>
          <Form.Control as="select" onChange={(event) => { selectUf(event.target.value)}}>
          <option value={0} key={0}>Todos os Estados</option>
            {ufs.map((uf) => {
              return <option value={uf.idUf} key={uf.idUf}>{uf.ufName}</option> 
            })}
          </Form.Control>
        </Nav>
        <Form inline>
          <NavLink to="/create-news" exact style={style}>
            <Button variant="outline-info">Cadastrar Notícia</Button>
          </NavLink>
          <NavLink to="/login" exact>
            <Button variant="outline-info">Entrar</Button>
          </NavLink>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;

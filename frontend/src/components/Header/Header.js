import React from 'react';
import { Form, Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Header.css';

// var teste = "";
const style = {
  marginRight: '10px',
};

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/news">DailyNews</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/news">Início</Nav.Link>
          <Form.Control as="select">
            <option>São Paulo</option>
            <option>Rio De Janeiro</option>
            <option>Minas Gerais</option>
            <option>Goias</option>
            <option>Pará</option>
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

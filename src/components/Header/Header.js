import React from 'react';
import { Form, Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

import './Header.css'


export default class Header extends React.Component {

  render() {
    return (
      <div className={this.props.hideHeader}>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/news">DailyNews</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/news">Início</Nav.Link>
            <Nav.Link href="#features">Assine</Nav.Link>

          </Nav>
          <Form inline>
            <NavLink to="/login" exact>
              <Button variant="outline-info" onClick={this.props.changeState}>
                Entrar
              </Button>
            </NavLink>
          </Form>
        </Navbar>
      </div>
    );
  }
}

// export default Header;

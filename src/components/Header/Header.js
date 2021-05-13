import { Form, Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

import './Header.css'

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">InfoNews</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/news">Início</Nav.Link>
          <Nav.Link href="#features">Assine</Nav.Link>
        </Nav>
        <Form inline>
          <NavLink to="/login" exact><Button variant="outline-info">Entrar</Button></NavLink>
        </Form>
      </Navbar>
    </>
  );
}

export default Header;

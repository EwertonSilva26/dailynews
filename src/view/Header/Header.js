import { Form, Button, Nav, Navbar } from 'react-bootstrap';

import './Header.css';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">DailyNews</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Início</Nav.Link>
          <Nav.Link href="#features">Assine</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-info">Entrar</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default Header;

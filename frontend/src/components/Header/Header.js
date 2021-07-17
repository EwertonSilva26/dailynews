import React from "react";
import { Form, Button, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { UfsContext } from "../../context/UfsProvider";
import { NewContext } from "../../context/NewProvider";
import { LoginContext } from "../../context/LoginProvider";

import { useHistory, useLocation } from "react-router-dom";

import "./Header.css";

const style = { marginRight: "10px" };

function Header() {
  const { token } = useContext(LoginContext);
  const { ufs } = useContext(UfsContext);
  const { selectUf } = useContext(NewContext);

  let history = useHistory();
  let location = useLocation();

  function handleButton() {
    if (token) {
      sessionStorage.removeItem("token");
    }

    setTimeout(() => {
      history.push("/login");
    }, 100);
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/news">DailyNews</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/news">Início</Nav.Link>
          <Form.Control
            as="select"
            defaultValue={0}
            onChange={(event) => {
              selectUf(event.target.value);
            }}
          >
            <option disabled value={0} key={0}>
              Filtar por estado
            </option>

            {ufs.map((uf) => { 
              return (
                <option value={uf.uf_id} key={uf.uf_id}>
                  {uf.uf_name}
                </option>
              );
            })}
          </Form.Control>
        </Nav>
        <Form inline>
          {token && !location.pathname.match("login") && (
            <NavLink to="/create-news" exact style={style}>
              <Button variant="outline-info">Cadastrar Notícia</Button>
            </NavLink>
          )}

          <Button variant="outline-info" onClick={handleButton}>
            {token && !location.pathname.match("login") ? "Sair" : "Entrar"}
          </Button>
        </Form>
      </Navbar>
      {token && !location.pathname.match("login") && <div className="user-info">Bem-vindo(a), {token.user_name}</div>}
    </div>
  );
}

export default Header;

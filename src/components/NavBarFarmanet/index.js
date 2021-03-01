import React from "react";
import { Navbar, Nav} from 'react-bootstrap';

const NavBarFarmanet = () => {

    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Farmanet</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/farmacias-turno">Buscar Farmacias de Turno</Nav.Link>
            <Nav.Link href="/documentacion">Documentación</Nav.Link>
          </Nav>
        </Navbar>
    );
}

export default NavBarFarmanet;
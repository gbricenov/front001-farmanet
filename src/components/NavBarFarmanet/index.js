import React from "react";
import { Navbar, Nav} from 'react-bootstrap';

const NavBarFarmanet = () => {

    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Farmanet</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Buscar Farmacias de Turno</Nav.Link>
            <Nav.Link href="#features">Documentación</Nav.Link>
            <Nav.Link href="#pricing">Autor</Nav.Link>
          </Nav>
        </Navbar>
    );
}

export default NavBarFarmanet;
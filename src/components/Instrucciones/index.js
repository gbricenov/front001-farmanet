import React from 'react';
import {Card} from 'react-bootstrap';

const Instrucciones = () =>{
    return(
        <Card>
            <Card.Header>Buscador Farmacias de Turno</Card.Header>
            <Card.Body>
                <Card.Title>¡Busca tu farmacia de turno más cercana!</Card.Title>
                <Card.Text>
                    Mediante filtros podras encontrar las farmacias de turno dependiendo del sector.
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default Instrucciones;
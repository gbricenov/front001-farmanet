import React from 'react';
import { Card } from 'react-bootstrap';

const Instrucciones = () =>{
    return(
        <Card>
            <Card.Header>Buscador Farmacias de Turno</Card.Header>
            <Card.Body>
                <Card.Title>¡Busca tu farmacia de turno más cercana!</Card.Title>
                <Card.Text>
                    Mediante filtros podras encontrar las farmacias de turno dependiendo del sector.<br/>
                    Puedes filtrar sólo por comuna y/o nombre de local.<br/>
                    NOTA: Al superar los 15 registros, MAPBOX falla al mostrar los primeros mapas, debido a que no es capaz de mostrar tantos simultaneamente. 
                    Al parecer esto se puede mejorar con un paginador.
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default Instrucciones;
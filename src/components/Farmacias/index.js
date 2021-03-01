import React from 'react';
import { Card , ListGroup, ListGroupItem } from 'react-bootstrap';
import MapaFarmacia from '../../components/MapaFarmacia';

const Farmacias = (farmacia) =>{

    farmacia = farmacia.farmacia;

    return(
        <>
            <br/>
            <Card key= {farmacia.idLocal} className="p-5">
                <Card.Body >
                    <MapaFarmacia
                        farmacia = {farmacia}
                    />
                </Card.Body>
            </Card >
            <Card key= {farmacia.telefonoLocal}>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Nombre Local: {farmacia.nombreLocal}</ListGroupItem>
                    <ListGroupItem>Funcionamiento día: {farmacia.fecha} ({farmacia.funcionamientoDia})</ListGroupItem>
                    <ListGroupItem>Horario de Apertura: {farmacia.funcionamientoHorarioApertura} - Horario de Cierre: {farmacia.funcionamientoHorarioCierre}</ListGroupItem>
                    <ListGroupItem>Dirección: {farmacia.direccionLocal}</ListGroupItem>
                    <ListGroupItem>Telefono: {farmacia.telefonoLocal}</ListGroupItem>
                </ListGroup>
            </Card>
        </>
    );

}

export default Farmacias;
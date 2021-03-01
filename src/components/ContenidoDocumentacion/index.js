import React from 'react';
import {Card} from 'react-bootstrap';
import solucion_planteada from '../../images/solucion_planteada.png';
import solucion_futuro from '../../images/solucion_futuro.png';
import nube from '../../images/nube.JPG';

const ContenidoDocumentacion = () =>{
    return(
        <Card>
            <Card.Header>Documentación asociada al proyecto</Card.Header>
            <Card.Body>
                <Card.Text>
                    El proyecto consta de dos artefactos principalmente:
                    <ul>
                        <li> BFF - La API REST se encuentra construida en NestJS, bajo Typescript. Más detalles técnicos se pueden encontrar en el repositorio de Github presionando <a href="https://github.com/gbricenov/srv001-bff">aquí</a> </li>
                        <li> FrontEnd - Se encuentra construida en ReactJS, el formulario fue realizado con la librería Formik y no se utilizo redux debido a lo pequeño que era el proyecto. 
                            Para el manejo de mapas se utilizó MapBox. Mas detalle en el repositorio seleccionando <a href="https://github.com/gbricenov/front001-farmanet">aquí</a> </li>
                    </ul> 
                    A continuación, se muestra la arquitectura utilizada:
                </Card.Text>

                <Card.Img variant="bottom" src={solucion_planteada} />

                <br/> <br/>

                <Card.Text>
                    La arquitectura proyectada a futuro sería la siguiente, por un tema de tiempo y esfuerzo que conlleva el test no se logró realizar, 
                    pero es necesario para manejar con mayor seguridad el dominio interno de las APIs. 
                    En este caso, en particular lo que se exponía ya era carácter público, así es que no se utilizó mayor seguridad en las llamadas de la API del BFF. 
                </Card.Text>

                <Card.Img variant="bottom" src={solucion_futuro} />

                <br/> <br/>

                <Card.Text>
                    Las aplicaciones fueron subidas a Digital Ocean por medio de Source to Image(S2I), las dos utilizando node.js como imagen base.
                </Card.Text>

                <Card.Img variant="bottom" src={nube} />

            </Card.Body>
        </Card>
    );

}

export default ContenidoDocumentacion;
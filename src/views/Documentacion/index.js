import ContenidoDocumentacion  from '../../components/ContenidoDocumentacion';
import NavBarFarmanet from '../../components/NavBarFarmanet';
import {Container} from 'react-bootstrap';

const Documentacion = () => {

 return (
    <>
        <NavBarFarmanet/>
        <br/>
        <Container>
            <ContenidoDocumentacion/>
        </Container>
    </>
 
 );
}

export default Documentacion;

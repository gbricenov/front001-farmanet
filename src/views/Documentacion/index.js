import EsquemasDocumentacion  from '../../components/EsquemasDocumentacion';
import NavBarFarmanet from '../../components/NavBarFarmanet';
import {Container} from 'react-bootstrap';

const Documentacion = () => {

 return (
    <>
        <NavBarFarmanet/>
        <br/>
        <Container>

            <EsquemasDocumentacion/>

        </Container>
    </>
 
 );
}

export default Documentacion;

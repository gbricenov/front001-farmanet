import React, { useEffect, useCallback, useState } from 'react';
import {Form , Row, Button, Col, Container, Alert} from 'react-bootstrap';
import { obtenerComunas, obtenerFarmaciasTurno } from '../../services';
import NavBarFarmanet from '../../components/NavBarFarmanet'; 
import Filtros from '../../components/Filtros';
import Farmacias from '../../components/Farmacias';
import Instrucciones from '../../components/Instrucciones';
import { Formik } from 'formik';
import * as yup from 'yup';

const FarmaciaDeTurno = () => {

    const [comunas,setComunas] = useState();
    const [farmaciasTurno,setFarmaciasTurno] = useState([]);
    const [show, setShow] = useState(false);

    const fetchData = useCallback(async () => {
    
        try {    
          const { data } = await obtenerComunas();
          setComunas(data);
        } catch (error) {
            console.error('Error en la obtención de los datos de comunas');
        }

    }, []);

    useEffect( () => {
        fetchData();
    }, [fetchData]);


    // FORMIK
    const schema = yup.object({
        comunaId: yup.string(),
        nombreLocal: yup.string().max(100, 'Largo no permitido')
    });

    const initialValues = {
        comunaId: 0,
        nombreLocal: ""
    }

    const validations = (values) => {

        let errors = {};
    
        if (values.comunaId === 0 && values.nombreLocal === '' ) {
          errors.nombreLocal = 'Al menos un filtro es requerido';
        }

        return errors;
    }

    const onSubmitFrom = async (values) => {

        setShow(false);

        const comuna = comunas.filter(
            (com) =>
              parseInt(values.comunaId) === parseInt(com.idComuna)
        )[0];

        const formObj = {
            comuna: comuna.nombreComuna,
            nombreLocal: values.nombreLocal
        };
        
        try {    
            const { data } = await obtenerFarmaciasTurno(formObj);
            if(data.length === 0){
                setShow(true);
            }
            setFarmaciasTurno(data);
          } catch (error) {
              console.error('Error en la obtención de los datos de farmacias de turno');
        }
    }

    return(
        <>
            <NavBarFarmanet/>
            <br/>
            <Container>

                <Instrucciones/>
                <br/>
            
                <Formik
                    validationSchema={schema}
                    onSubmit={onSubmitFrom}
                    validate={validations}
                    initialValues={initialValues}
                >

                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        errors,
                        handleBlur,
                    }) => (

                        <Form noValidate onSubmit={handleSubmit}>

                            <Filtros
                                comunas={comunas}
                                values={values}
                                handleChange={handleChange}
                                errors={errors}
                                handleBlur={handleBlur}
                                touched={touched}
                            />

                            <br/>

                            <Row>
                                <Col >
                                <Button size="md" style={{ float: 'right' }} type="submit">Buscar</Button>
                                </Col>
                            </Row>
                        </Form>

                )}
                </Formik>
                { show ? 
                    <>
                        <br/>
                        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                            
                            No existen datos para el filtro.
                        </Alert>
                    </>
                :
                    null
                }

                

                {
                    farmaciasTurno && farmaciasTurno.map((farmacia)=>(
                        <Farmacias
                            farmacia = {farmacia}
                        />
                    ))
                }

            </Container>
        </>
    );
}

export default FarmaciaDeTurno;

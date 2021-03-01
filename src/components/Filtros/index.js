import React from "react";
import { Form, Col } from "react-bootstrap";

const Filtros = ({
  comunas,
  values,
  handleChange,
  errors,
  handleBlur,
  touched
}) => {

    const {
        comunaId,
        nombreLocal
      } = values;
      return (
      <>
        <Form.Row>
            <Form.Group as={Col}>
            <Form.Label>Comunas</Form.Label>
            <Form.Control
                as="select"
                name="comunaId"
                value={comunaId}
                onChange={handleChange}
                isInvalid={touched.comunaId && !!errors.comunaId}
                onBlur={handleBlur}
            >
                {comunas && comunas.map((comuna) => (
                    <option key={comuna.idComuna} value={comuna.idComuna }>
                        {comuna.nombreComuna}
                    </option>
                ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
                {touched.comunaId && errors.comunaId
                ? errors.comunaId
                : ""}
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Label>Nombre del Local</Form.Label>
            <Form.Control
                type="text"
                name="nombreLocal"
                placeholder="Nombre del local"
                onChange={handleChange}
                value={nombreLocal}
                maxLength="50"
                isInvalid={
                touched.nombreLocal && !!errors.nombreLocal
                }
                onBlur={handleBlur}
                autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
                {touched.nombreLocal && errors.nombreLocal
                ? errors.nombreLocal
                : ""}
            </Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        </>
      );

};

export default Filtros;
import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const ModalForm = (props) => {

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                    <Modal.Title>Agregar Asignación</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Tipo de cultivo</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Café</option>
                                <option value="2">Papa</option>
                                <option value="3">Yuca</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Nombre del predio</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">Finca el amanecer</option>
                                <option value="2">Hacienda el sol</option>
                                <option value="3">Finca tierra nueva</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formText">
                            <Form.Label>Fecha de Siembra</Form.Label>
                            <Form.Control type="text" placeholder="Fecha de Siembra" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formText">
                            <Form.Label>Fecha de Cosecha</Form.Label>
                            <Form.Control type="text" placeholder="Fecha de Cosecha" />
                        </Form.Group>
                    </Row>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={props.onHide}>
                    Guardar
                </Button>
            </Modal.Footer>

            
        </Modal>
    )
}

const FormFechas = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button variant="primary" onClick={() => setModalShow(true)} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> 
                Asignar Fecha
            </button>

            <ModalForm
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default FormFechas;
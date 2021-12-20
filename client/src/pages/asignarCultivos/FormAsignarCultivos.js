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
                            <Form.Label>N° Semillas</Form.Label>
                            <Form.Control type="text" placeholder="N° Semillas" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formText">
                            <Form.Label>m³ de Agua</Form.Label>
                            <Form.Control type="text" placeholder="m³ de Agua" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGroupEmail">
                            <Form.Label>Cantidad Fertilizante</Form.Label>
                            <Form.Control type="text" placeholder="Cantidad Fertilizante" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formText">
                            <Form.Label>Tiempo Cultivo</Form.Label>
                            <Form.Control type="text" placeholder="Tiempo Cultivo" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formText">
                            <Form.Label>Tiempo Recolección</Form.Label>
                            <Form.Control type="text" placeholder="Tiempo Recolección" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGroupEmail">
                            <Form.Label>Kg de cultivo recolectado</Form.Label>
                            <Form.Control type="text" placeholder="Kg de cultivo recolectado" />
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

const FormAsignarCultivos = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button variant="primary" onClick={() => setModalShow(true)} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> 
                Agregar Asignación
            </button>

            <ModalForm
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default FormAsignarCultivos;
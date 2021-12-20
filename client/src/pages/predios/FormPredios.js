import React from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

import { AiOutlineFolderAdd } from "react-icons/ai";

const ModalForm = (props) => {

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                    <Modal.Title>Agregar Tipo De Cultivo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formText">
                            <Form.Label>Código Predio</Form.Label>
                            <Form.Control type="text" placeholder="Código Predio" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formText">
                            <Form.Label>Nombre del Predio</Form.Label>
                            <Form.Control type="text" placeholder="Nombre del Predio" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Selecciona Un Encargado</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Camilo</option>
                            <option value="2">Manuela</option>
                            <option value="3">Alejandro</option>
                        </Form.Select>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formText">
                            <Form.Label>N° Hectareas</Form.Label>
                            <Form.Control type="text" placeholder="N° Hectareas" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formText">
                            <Form.Label>Latitud</Form.Label>
                            <Form.Control type="text" placeholder="Latitud" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formText">
                            <Form.Label>Longitud</Form.Label>
                            <Form.Control type="text" placeholder="Longitud" />
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

const FormPredios = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button variant="primary" onClick={() => setModalShow(true)} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> 
                <AiOutlineFolderAdd/> Agregar Predio
            </button>

            <ModalForm
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default FormPredios;
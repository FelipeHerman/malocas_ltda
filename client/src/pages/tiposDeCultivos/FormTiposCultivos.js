import React from 'react'

import Swal from 'sweetalert2'
import { Modal, Button, Form } from 'react-bootstrap';

const ModalForm = (props) => {

    const createTipoCultivo = (e) => {
        const url = 'http://localhost:5000/cultivos/';

        e.preventDefault()

        const cultivos = {
            tipoCultivo: e.target.tipoCultivo.value,
            finalidad: e.target.finalidad.value,
            clasificacion: e.target.clasificacion.value,
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(cultivos),
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => Swal.fire({
                                icon: 'success',
                                title: 'Agregado', 
                                text: 'Cultivo agregado con éxito',
                                confirmButtonColor: '#198754',
                                confirmButtonText: 'OK',
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        window.location.reload();
                                    } 
                                })
                );
            
    }

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                    <Modal.Title>Agregar Tipo De Cultivo</Modal.Title>
            </Modal.Header>

            <Form onSubmit={createTipoCultivo}>
                <Modal.Body>
                    
                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Tipo de Cultivo</Form.Label>
                        <Form.Control type="text" name="tipoCultivo" placeholder="Tipo de Cultivo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Finalidad</Form.Label>
                        <Form.Control type="text" name="finalidad" placeholder="Finalidad" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Clasificación</Form.Label>
                        <Form.Control type="text" name="clasificacion" placeholder="Clasificación" />
                    </Form.Group>
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={props.onHide} type="submit">
                        Guardar
                    </Button>
                </Modal.Footer>
                
            </Form>
        </Modal>
    )
}

const FormTiposCultivos = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button variant="primary" onClick={() => setModalShow(true)} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> 
                Agregar Tipo de Cultivo
            </button>

            <ModalForm
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default FormTiposCultivos;
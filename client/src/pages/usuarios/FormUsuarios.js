import React from 'react'

import { Modal, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'

import { FiUserPlus } from "react-icons/fi";

var md5 = require('md5');

const ModalForm = (props) => {
    
    const createUsuario = (e) => {

        const url = 'http://localhost:5000/usuarios/';

        e.preventDefault()

        const usuarios = {
            nombres: e.target.nombres.value,
            apellidos: e.target.apellidos.value,
            email: e.target.email.value,
            password: md5(e.target.password.value),
            tipoUsuario: e.target.tipoUsuario.value,
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(usuarios),
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => Swal.fire({
                                icon: 'success',
                                title: 'Agregado', 
                                text: 'Usuario agregado con éxito',
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
                    <Modal.Title>Agregar Usuario</Modal.Title>
            </Modal.Header>

            <Form onSubmit={createUsuario}>
                <Modal.Body>

                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="text" placeholder="Nombres" name="nombres"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Apellidos" name="apellidos"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" name="email"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" name="password"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Selecciona un tipo de usuario</Form.Label>
                        <Form.Select aria-label="Default select example" name="tipoUsuario">
                            <option value="administrador">Administrador</option>
                            <option value="normal">Normal</option>
                            <option value="persona">Persona</option>
                        </Form.Select>
                    </Form.Group>

                </Modal.Body>
            
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Cerrar
                    </Button>

                    <Button variant="primary" onClick={props.onHide} type='submit'>
                        Guardar
                    </Button>
                </Modal.Footer>

            </Form>
        </Modal>
    )
}

const FormUsuarios = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <button variant="primary" onClick={() => setModalShow(true)} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> 
                <FiUserPlus/> Agregar Usuario
            </button>

            <ModalForm
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default FormUsuarios;
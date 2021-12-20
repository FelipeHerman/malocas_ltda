import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

import { Link } from "react-router-dom";

import campo1 from '../assets/images/campo1.jpg';

const Register = () => {

    return (
        <div className="SingUp" style={{ backgroundColor: '#E4FFD2', height: '100vh' }}>
            <div className="container mx-auto py-4 px-5 w-75">
                <div className="card h-50 text-center" style={{ borderRadius: '18px', borderStyle: 'none' }}>
                    <div className="row g-0" >
                        <div className="col-md-6 d-sm-none d-none d-md-block">
                            <img src={campo1} className="img-fluid " style={{ borderRadius: '18px 0px 0px 18px', borderStyle: 'none', height: '100%' }} alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <div className="d-flex mb-3">
                                    <div className="p-3 ms-auto">
                                        <p className="fs-3 pt-5">Crear cuenta</p>
                                    </div>
                                    <div className="ms-auto">
                                        <Link to="/"><button className="btn-close" /></Link>
                                    </div>
                                </div>

                                <Form className="fs-5" id="form_rgstr">

                                    <Form.Group class="input-group mb-3 input-group-lg">
                                        <Form.Control type="text" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Nombres" name="nombres"/>

                                        <Form.Control type="text" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Apellidos" name="apellidos"/>
                                    </Form.Group>


                                    <Form.Group class="input-group mb-3 input-group-lg">
                                        <Form.Control type="email" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Email" name="email"/>
                                    </Form.Group>

                                    <Form.Group class="input-group mb-3 input-group-lg">
                                        <Form.Control type="password" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Contraseña" name="password"/>

                                        <Form.Control type="password" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Repetir Contraseña" name="password"/>
                                    </Form.Group>

                                    <Form.Group className="d-grid gap-1 input-group input-group-lg py-3">
                                        <button className="btn btn-success btn-lg rounded-pill">
                                            REGISTRARSE
                                        </button>
                                    </Form.Group>

                                </Form>

                                <hr />
                                <div className="text-center">
                                    <Link className="fs-6 text-success text-decoration-none" to="/login">¡Inicia sesión en Malocas!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Register;
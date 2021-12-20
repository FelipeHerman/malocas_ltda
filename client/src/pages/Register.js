import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';

import { Link } from "react-router-dom";

import campo1 from '../assets/images/campo1.jpg';

const Register = () => {

    return (
        <div className="SingUp" style={{ backgroundColor: '#E4FFD2', height: '100vh' }}>
            <div className="container-fluid py-4 px-5">
                <div className="row">
                    <div className="card col-md-8 text-center shadow px-0 mx-auto" style={{ borderRadius: '18px', borderStyle: 'none' }}>
                        <div className="row g-0" >
                            <div className="col-md-6 d-sm-none d-none d-md-block">
                                <img src={campo1} className="img-fluid" style={{ borderRadius: '18px 0px 0px 18px', borderStyle: 'none', height: '100%' }} alt="..." />
                            </div>
                            <div className="col-sm-8 col-xs-12 col-md-6">
                                <div className="card-body">
                                    <div className="d-flex justify-content-end">
                                        <Link to="/"><button className="btn-close" /></Link>
                                    </div>
                                    <div className="pb-3 justify-content-center">
                                        <p className="fs-3 pt-5 fw-bold">Crear cuenta</p>
                                    </div>
                                    <Form id="form_rgstr">
                                        <Form.Group className="row mb-3">
                                            <Form.Control type="text" className="col rounded-pill mx-2 border-success border-2" placeholder="Nombres" name="nombres" />
                                            <Form.Control type="text" className="col rounded-pill mx-2 border-success border-2" placeholder="Apellidos" name="apellidos" />
                                        </Form.Group>
                                        <Form.Group className="row mb-3 me-0">
                                            <Form.Control type="text" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Apellidos" name="apellidos" />
                                        </Form.Group>
                                        <Form.Group className="row mb-3 me-0">
                                            <Form.Control type="email" className="form-control rounded-pill mx-2 border-success border-2" placeholder="Email" name="email" />
                                        </Form.Group>
                                        <Form.Group className="row mb-3">
                                            <Form.Control type="password" className="col rounded-pill mx-2 border-success border-2" placeholder="Contraseña" name="password" />
                                            <Form.Control type="password" className="col rounded-pill mx-2 border-success border-2" placeholder="Repetir Contraseña" name="password" />
                                        </Form.Group>
                                        <Form.Group className="d-grid gap-1 py-3">
                                            <button className="btn btn-success rounded-pill col">CREAR</button>
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
        </div>
    )

}

export default Register;
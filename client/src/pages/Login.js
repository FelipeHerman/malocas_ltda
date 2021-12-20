import React, { Component } from 'react';

import { Link } from "react-router-dom";
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

import campo2 from '../assets/images/campo2.jpg';

class Login extends Component {

    render() {
        return (
            <div className="Login" style={{ backgroundColor: '#E4FFD2', height: '100vh' }}>
                <div className="container-fluid py-4 px-5">
                    <div className="row">
                        <div className="card col-md-5 text-center shadow px-0 mx-auto" style={{ borderRadius: '18px', borderStyle: 'none' }}>
                            <div className="row g-0">
                                <div className="col-md-6 d-none d-md-block">
                                    <img src={campo2} className="img-fluid" style={{ borderRadius: '18px 0px 0px 18px', borderStyle: 'none', height: '100%' }} alt="..." />
                                </div>
                                <div className="col-sm-8 col-xs-12 col-md-6">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <Link to="/"><button className="btn-close" /></Link>
                                        </div>
                                        <div className="pb-3 justify-content-center">
                                            <p className="fs-3 pt-5 fw-bold">Bienvenido a Malocas</p>
                                        </div>
                                            <div className="mb-3 form-group">
                                                <input type="email" className="form-control rounded-pill border-success border-2 text-center" placeholder="Ingresa tu email" name="email"/>
                                            </div>
                                            <div className="mb-3 form-group">
                                                <input type="password" className="form-control rounded-pill  border-success border-2 text-center" placeholder="Contraseña" name="password" />
                                            </div>
                                            <div className="d-grid gap-1 form-group">
                                                <button className="btn btn-success rounded-pill"><Link to="/dashboard/usuarios" className="text-decoration-none text-light">Ingresar</Link></button>
                                            </div>
                                        <hr />                                        

                                        <div className="text-center">
                                            <Link className="fs-6 text-success text-decoration-none" to="/registro">¡Crear una cuenta!</Link>
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
}

export default Login;
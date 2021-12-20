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
                <div className="container mx-auto py-5 px-5 w-50">
                    <div className="card h-auto text-center" style={{ borderRadius: '18px', borderStyle: 'none' }}>
                        <div className="row g-0">
                            <div className="col-md-6 d-sm-none d-none d-md-block" >
                                <img src={campo2} className="img-fluid" style={{ borderRadius: '18px 0px 0px 18px', borderStyle: 'none', height: '100%'}} alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <div className="d-flex mb-3">
                                        <div className="p-3 mx-auto">
                                            <p className="fs-3 pt-5">Bienvenido a Malocas</p>
                                        </div>
                                        <div className="ms-auto">
                                            <Link to="/"><button className="btn-close"/></Link>
                                        </div>
                                    </div>

                                    
                                    <div className="mb-3 input-group input-group-lg ">
                                        <input type="email" className="form-control rounded-pill border-success border-2 text-center" placeholder="Ingresa tu email"
                                        name="email"
                                        />
                                    </div>
                                    <div className="mb-3 input-group input-group-lg">
                                        <input type="password" className="form-control rounded-pill  border-success border-2 text-center" placeholder="Contraseña"
                                        name="password"
                                        />
                                    </div>
                                    <div className="d-grid gap-1 input-group input-group-lg">
                                        {/* <button className="btn btn-success btn-lg rounded-pill" 
                                        href="/dashboard/usuarios">INGRESAR</button> */}
                                        <Link to="/dashboard/usuarios" >Ingresar</Link>
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
        )
    }
}

export default Login;
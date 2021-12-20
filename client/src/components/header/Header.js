import React, { useState } from "react";
import { Link } from "react-router-dom";
import azada from '../../assets/images/scythe.png';
import campo6 from '../../assets/images/campo6.jpg';

const Header = () => {

    const [isActive,setActive] = useState("inicio")

    return (
        <div id="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm" id="mainNav">
                <div className="container px-5">
                    <a className={` ${isActive === "inicio" ? 'navbar-brand py-0 active' : 'navbar-brand py-0'}`} onClick={() => setActive("inicio")} href="#inicio">
                        <img src={azada} alt="azada" style={{ height: '2em', weight: '2em' }} />
                    </a>
                    <h4 className="fw-bold">Malocas</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                            <li className="nav-item">
                                <a className={` ${isActive === "inicio" ? 'nav-link me-lg-3 active' : 'nav-link me-lg-3'}`} onClick={() => setActive("inicio")} href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className={` ${isActive === "servicios" ? 'nav-link me-lg-3 active' : 'nav-link me-lg-3'}`} onClick={() => setActive("servicios")} href="#servicios">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className={` ${isActive === "informacion" ? 'nav-link me-lg-3 active' : 'nav-link me-lg-3'}`} onClick={() => setActive("informacion")} href="#informacion">Información</a>
                            </li>
                            <li className="nav-item">
                                <a className={` ${isActive === "contacto" ? 'nav-link me-lg-3 active' : 'nav-link me-lg-3'}`} onClick={() => setActive("contacto")} href="#contacto">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-lg-3" to="/login">Iniciar Sesión</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-success me-lg-3" to="/registro">Registrarse</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header id="inicio" className="masthead py-4">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                <h5> Bienvenidos a Agricola Las Malocas Ltda </h5>
                                <h1 className="display-1 lh-1 mb-3 fw-bold" style={{ color: '#034303' }}>Calidad para tus cultivos</h1>
                                <p className="lead fw-normal text-muted mb-5">Realización de toda clase de actividades agropecuarias y/o agroindustriales en terrenos propios o ajenos.</p>
                                <div className="d-flex flex-column flex-lg-row align-items-center">
                                    <Link role="button" className="btn btn-success me-lg-3 mb-4 mb-lg-0" to="/login">Ingresar a Malocas </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-sm-none d-none d-lg-block">
                            <img src={campo6} alt="" style={{ height: '25rem', width: '34rem', borderRadius: '18px' }}></img>
                        </div>
                    </div>
                </div>
            </header>
            <div className="text-center bg-success py-4 my-5">
                <div className="container-fluid px-5 pt-0">
                    <div className="row gx-6 justify-content-center">
                        <div className="col-xl-8">
                            <p className="fs-4 text text-white mb-4">"La web de Agricola Las Malocas Ltda está clasificada para brindar a través de un sistema la información de la siembra y recolección de cultivos."</p>
                            <Link role="button" className="btn btn-success btn-lg mb-4 mb-lg-0 w-auto" to="/Registro">Registrarse </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
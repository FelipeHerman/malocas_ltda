import React from "react";
import { Link } from "react-router-dom";

import azada from '../../assets/images/scythe.png';

const Navbar = () => {

    const [isActive,setActive] = React.useState("inicio")

    return (
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
    )
    

}

export default Navbar;
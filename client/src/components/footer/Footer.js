import React from 'react';

import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer id="contacto" className="bg-white pt-4 pb-3">
            <div className="container px-4 py-2">
                <div className="row gx-1 fs-5 py-2">
                    <div className="col">
                        <div className=""><b>Contacto </b></div>
                        <ul className="list-group fs-6">
                            <li className="list-group-item border-white">Palmira, Valle</li>
                            <li className="list-group-item border-white">(2)2752727</li>
                            <li className="list-group-item border-white">Agricola Las Malocas Ltda</li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className=""><b>Brindamos </b></div>
                        <ul className="list-group fs-6">
                            <li className="list-group-item border-white">Gestión</li>
                            <li className="list-group-item border-white">Control</li>
                            <li className="list-group-item border-white">Resultados</li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className=""><b> Ingresos </b></div>
                        <ul className="list-group fs-6">
                            <li className="list-group-item border-white">
                                <Link className="text-decoration-none text-dark" to="/login">Iniciar Sesión</Link>
                            </li>
                            <li className="list-group-item border-white">
                                <Link className="text-decoration-none text-dark" to="/Registro">Registrarse</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className=""><b>Agricola Las Malocas Ltda </b></div>
                        <ul className="list-group fs-6">
                            <li className="list-group-item border-white">Km 7 via Palmira - Cerrito en la ciudad de Palmira</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container px-4 py-2">
                <div className="row">
                    <div className="col fs-3">
                        <b>Malocas Ltda.</b>
                    </div>
                    <div className="col text-end text-muted">
                        &copy; Agricola Las Malocas Ltda 2021. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;
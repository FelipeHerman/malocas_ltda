import React, { Component } from "react";

import Cookies from 'universal-cookie';

import { FaUserAlt } from "react-icons/fa";
import { BsFolderFill, BsFillGearFill } from "react-icons/bs";
import { RiPlantLine } from "react-icons/ri";
import { GiFlowerPot, GiScythe } from "react-icons/gi";
import { GoRepo } from "react-icons/go";
import { ImUserCheck } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";

import { NavLink, Link } from "react-router-dom";

const cookies = new Cookies();

class Sidebar extends Component {

    render() {
        return (

            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard/usuarios">
                    <div className="sidebar-brand-text mx-3">Malocas Ltda.</div>
                </Link>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/usuarios">
                        <FaUserAlt/>
                        <span> Usuarios</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/predios">
                        <BsFolderFill/>
                        <span> Predios</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/configuracion">
                        <BsFillGearFill/>
                        <span> Configuración</span>
                    </NavLink>
                </li>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/tiposDeCultivos">
                        <GiFlowerPot/>
                        <span> Tipos de Cultivos</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/asignarCultivos">
                        <RiPlantLine/>
                        <span> Asignar Cultivos</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/siembraCosecha">
                        <GiScythe/>
                        <span> Siembra y Cosecha</span>
                    </NavLink>
                </li>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/reportes">
                        <GoRepo/>
                        <span> Reportes</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/perfil">
                        <ImUserCheck/>
                        <span> Perfil</span>
                    </NavLink>
                </li>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        <BiLogOut/>
                        <span> Salir</span>
                    </Link>
                </li>
            </ul>
                
        )
    }
}

export default Sidebar;
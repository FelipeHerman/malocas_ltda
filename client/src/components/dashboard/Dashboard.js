import React from 'react';

import { Routes, Route, Outlet } from "react-router-dom";

import {Sidebar, Topbar} from '../';
import { Usuarios, Predios, Configuracion, TiposCultivos, AsignarCultivos, SiembraCosecha, Reportes, Perfil } from '../../pages';

export default function Dashboard() {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayout />}>
                <Route path="usuarios" element={<Usuarios />} />
                <Route path="predios" element={<Predios />} />
                <Route path="configuracion" element={<Configuracion />} />
                <Route path="tiposDeCultivos" element={<TiposCultivos />} />
                <Route path="asignarCultivos" element={<AsignarCultivos />} />
                <Route path="siembraCosecha" element={<SiembraCosecha />} />
                <Route path="reportes" element={<Reportes />} />
                <Route path="perfil" element={<Perfil />} />
            </Route>
        </Routes>
    );
}

function DashboardLayout() {
    return (
        <div id="wrapper">
            <Sidebar/>

            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown no-arrow">
                                <Topbar/>
                            </li>
                        </ul>
                    </nav>
                    
                    <div className="container-fluid">
                        {/* Aquí se deben de cargar las vistas del dashboard, cuando se de click en los enlaces del */}
                        <Outlet />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
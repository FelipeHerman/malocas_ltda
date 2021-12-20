import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/* import Dashboard from './dashboard/Dashboard'; */
import { Usuarios, Predios, Configuracion, TiposCultivos, AsignarCultivos, SiembraCosecha, Reportes, Perfil } from '../pages';

import { Login, Register } from '../pages';

import LandingPage from './landingPage/LandingPage';
const Dashboard = React.lazy(() => import("./dashboard/Dashboard"));

const Rutas = () => (
    
    <>
        <Routes>

            <Route path="/" element={<LandingPage />} />

            <Route path="/login" element={<Login/>} />
            <Route path="/registro" element={<Register/>} />
            
            <Route
                path="dashboard/*"
                element={
                <React.Suspense fallback={<>...</>}>
                    <Dashboard />
                </React.Suspense>
                }
            />
            
        </Routes>
    </>
);

export default Rutas;
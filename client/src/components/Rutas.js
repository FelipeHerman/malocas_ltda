import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Login, Register } from '../pages';

import LandingPage from './landingPage/LandingPage';
const Dashboard = React.lazy(() => import("./dashboard/Dashboard"));

const Rutas = () => (
    
    <>
        <Routes>

            <Route path="/" element={<LandingPage />} />

            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            
            <Route
                path="dashboard/*"
                element={
                <React.Suspense fallback={<>...</>}>
                    <Dashboard />
                </React.Suspense>
                }
            />

            <Route path="*" element={<LandingPage />} />
            
        </Routes>
    </>
);

export default Rutas;
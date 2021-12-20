import React from 'react'

import { BsFillGearFill } from "react-icons/bs";

const Configuracion = () => (

    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Configuracion</h1>
    
        <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> 
            <BsFillGearFill/> Agregar Configuración 
        </button>
    </div>
        
)

export default Configuracion;
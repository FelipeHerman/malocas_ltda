import React, { useEffect } from 'react';

import MyTable from '../../components/table/MyTable';
import FormUsuarios from './FormUsuarios';

import '../../components/table/table.css';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UsuariosDos = () => {

    const [usuarios, setUsuarios] = React.useState([])

    useEffect(() => {
        readTipoCultivo()
    }, []);
    
    const readTipoCultivo = () => {
        fetch('http://localhost:5000/usuarios/')
            .then((response) => response.json())
            .then((data) => {
                setUsuarios(data)
            });
    }

    const confirmDelete = async (id) =>{
        const response = await fetch(`http://localhost:5000/usuarios/${id}`);

        const data = await response.json( );
        
        console.log(data);
    }

    confirmDelete( );

    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Gestion de Usuarios</h1>
            
                <FormUsuarios />
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Tabla Tipos de Usuarios</h6>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ width: '30%' }}>Nombres</th>
                                    <th style={{ width: '30%' }}>Apellidos</th>
                                    <th style={{ width: '30%' }}>Correo Electrónico</th>
                                    <th style={{ width: '30%' }}>Tipo de Usuario</th>
                                    <th style={{ width: '10%' }}>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {usuarios && usuarios.map(usuario => 
                                    <tr key={usuario.id}>
                                        <td>{usuario.nombres}</td>
                                        <td>{usuario.apellidos}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.tipoUsuario}</td>

                                        <td style={{ whiteSpace: 'nowrap' }}>
                                            <button onClick={() => confirmDelete(usuario._id)} className="btn btn-sm btn-danger btn-delete-user" disabled={usuario.isDeleting}>
                                                {usuario.isDeleting 
                                                    ? <span className="spinner-border spinner-border-sm"></span>
                                                    : <span>Delete</span>
                                                }
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default UsuariosDos;
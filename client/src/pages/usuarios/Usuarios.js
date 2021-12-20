import React, { useEffect } from 'react';

import MyTable from '../../components/table/MyTable';
import FormUsuarios from './FormUsuarios';

import '../../components/table/table.css';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Usuarios = () => {

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

    const columns = React.useMemo(
        () => [
                {
                    Header: 'Nombres',
                    accessor: 'nombres',
                },
                {
                    Header: 'Apellidos',
                    accessor: 'apellidos',
                },
                {
                    Header: 'Correo Electrónico',
                    accessor: 'email',
                },
                {
                    Header: 'Tipo de Usuario',
                    accessor: 'tipoUsuario',
                },
                {
                    Header: 'Acciones',
                    Cell:   <div>
                                <button className="button touch edit"><FaEdit/></button>
                                <button className="button touch delete"><MdDelete/></button>
                            </div>,
                },
            ],
        []
    )

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
                        <MyTable columns={columns} data={usuarios} />
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Usuarios;
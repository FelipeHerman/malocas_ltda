import React, { useEffect } from 'react';

import MyTable from '../../components/table/MyTable';
import FormUsuarios from './FormUsuarios';

import '../../components/table/table.css';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Swal from 'sweetalert2'

const Usuarios = () => {

    const [usuarios, setUsuarios] = React.useState([])

    useEffect(() => {
        readUsuario()
    }, []);
    
    const readUsuario = () => {
        fetch('http://localhost:5000/usuarios/')
            .then((response) => response.json())
            .then((data) => {
                setUsuarios(data)
            });
    }

    const deleteUsuario = (id) => {
        
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#198754',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, bórralo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Eliminado',
                        text: "¡Usuario eliminado con éxito!",
                        confirmButtonColor: '#198754',
                        confirmButtonText: 'OK',
                    }).then((result_2) => {
                        if (result_2.isConfirmed) {
                            
                            const deleteUser = async () => {
                                const response = await fetch(`http://localhost:5000/usuarios/delete/${id}`);

                                const data = await response.json( );

                                console.log(data)
                            }
                                
                            deleteUser()
                            window.location.reload();
                        }
                    })
                }
            })

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
                    accessor: '_id',
                    Cell: ({ cell: { value } }) => {
                            return <>
                                        <button type="button" className="button touch edit">
                                            <FaEdit/>
                                        </button>

                                        <button type="button" className="button touch delete" onClick={() => deleteUsuario(value)}>
                                            <MdDelete/>
                                        </button>
                                    </>
                        } 
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
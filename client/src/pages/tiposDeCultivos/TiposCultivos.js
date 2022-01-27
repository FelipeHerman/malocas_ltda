import React, { useEffect } from 'react'

import MyTable from '../../components/table/MyTable';

import FormTiposCultivos from './FormTiposCultivos';

import '../../components/table/table.css';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Swal from 'sweetalert2'

const TiposCultivos = () => {

    const [cultivos, setTiposCutivos] = React.useState([])

    useEffect(() => {
        readTipoCultivo()
    }, []); 


    const readTipoCultivo = () => {
        
        fetch('http://localhost:5000/cultivos/')
            .then((response) => response.json())
            .then((data) => {
                setTiposCutivos(data)
            });
    }

    const deleteTipoCultivo = (id) => {
        
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
                                const response = await fetch(`http://localhost:5000/cultivos/delete/${id}`);

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
                    Header: 'Tipo de Cultivo',
                    accessor: 'tipoCultivo',
                },
                {
                    Header: 'Finalidad',
                    accessor: 'finalidad',
                },
                {
                    Header: 'Clasificación',
                    accessor: 'clasificacion',
                },
                {
                    Header: 'Acciones',
                    accessor: '_id',
                    Cell: ({ cell: { value } }) => {
                            return <>
                                        <button type="button" className="button touch edit">
                                            <FaEdit/>
                                        </button>

                                        <button type="button" className="button touch delete" onClick={() => deleteTipoCultivo(value)}>
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
                <h1 className="h3 mb-0 text-gray-800">Tipos de Cultivos</h1>
            
                <FormTiposCultivos />
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Tabla Tipos de Cultivo</h6>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <MyTable
                            columns={columns}
                            data={cultivos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default TiposCultivos;
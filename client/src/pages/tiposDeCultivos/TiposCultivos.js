import React, { useEffect } from 'react'

import MyTable from '../../components/table/MyTable';

import FormTiposCultivos from './FormTiposCultivos';

import '../../components/table/table.css';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TiposCultivos = () => {

    /* useEffect(() => {
        fetch('http://localhost:5000/cultivos/')
            .then((response) => response.json())
            .then((data) => {
                setTiposCutivos(data)
                console.log(data)
            });
    }); */

    const [cultivos, setTiposCutivos] = React.useState([])

    useEffect(() => {
        readTipoCultivo()
    }, []); 

    const readTipoCultivo = () => {
        /* getData();
        async function getData() {
            const response = await fetch("http://localhost:5000/cultivos");
            const data = await response.json();

            
            setTiposCutivos(data) ;
        } */
        fetch('http://localhost:5000/cultivos/')
            .then((response) => response.json())
            .then((data) => {
                setTiposCutivos(data)
            });
    }

    const confirmDelete = id => {

        /* fetch(`http://localhost:5000/cultivos/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
            }).then(response => response.json()) */

        console.log(id)
            
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

                                        <button type="button" className="button touch delete" onClick={() => confirmDelete(value)}>
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
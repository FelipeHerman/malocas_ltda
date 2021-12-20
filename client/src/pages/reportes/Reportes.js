import React from 'react'

import MyTable from '../../components/table/MyTable';
import customerList from '../../assets/JsonData/reportes-list.json';

import '../../components/table/table.css';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Reportes = () => {

    const columns = React.useMemo(
        () => [
                {
                    Header: 'Tipo de Cultivo',
                    accessor: 'tipoCultivo',
                },
                {
                    Header: 'Predio',
                    accessor: 'predio',
                },
                {
                    Header: 'Costo Total',
                    accessor: 'costoTotal',
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

    const data = React.useMemo(() => customerList, [])

    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Reporte de Cultivos</h1>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Tabla de Reportes</h6>
                </div>

                <div class="card-body">
                    <div class="table-responsive">
                        <MyTable columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Reportes;
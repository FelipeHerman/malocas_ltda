import React from 'react'

import MyTable from '../../components/table/MyTable';
import customerList from '../../assets/JsonData/asignarCultivo-list.json';

import FormAsignarCultivo from './FormAsignarCultivos';

import '../../components/table/table.css';

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AsignarCultivos = () => {

    const columns = React.useMemo(
        () => [
                {
                    Header: 'Cultivo',
                    accessor: 'tipoCultivo',
                },
                {
                    Header: 'Predio',
                    accessor: 'predio',
                },
                {
                    Header: 'N° Semillas',
                    accessor: 'numSemillas',
                },
                {
                    Header: 'm3 Agua',
                    accessor: 'cantAgua',
                },
                {
                    Header: 'Cantidad Fertilizante',
                    accessor: 'cantFertilizante',
                },
                {
                    Header: 'Tiempo Cultivo',
                    accessor: 'tiempoCultivo',
                },
                {
                    Header: 'Tiempo Recolección',
                    accessor: 'tiempoRecoleccion',
                },
                {
                    Header: 'Kg Recolectados',
                    accessor: 'cultivoRecolectado',
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
                <h1 className="h3 mb-0 text-gray-800">Asignación de Cultivos</h1>
            
                <FormAsignarCultivo />
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Tabla Asignación de Cultivos</h6>
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

export default AsignarCultivos;
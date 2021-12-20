import React from 'react'

import { useTable, usePagination } from 'react-table'

import './table.css'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function MyTable({ columns, data }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
            {
                columns,
                data,
                initialState: { pageIndex: 0, pageSize: 5 },
            },
            usePagination
        )

    return (
        
        <div className="card-body">
            <div className="table-responsive">
                <table {...getTableProps()} className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row)
                            return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-7">
                    <span className="pagination-span">
                        Página{' '}
                        <strong>
                            {pageIndex + 1} de {pageOptions.length}
                        </strong>{' '}
                    </span>
                    <button className="boton" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {<AiOutlineDoubleLeft/>}
                    </button>{' '}
                    <button className="boton" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {<IoIosArrowBack/>}
                    </button>{' '}
                    <button className="boton" onClick={() => nextPage()} disabled={!canNextPage}>
                        {<IoIosArrowForward/>}
                    </button>{' '}
                    <button className="boton" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {<AiOutlineDoubleRight/>}
                    </button>{' '}
                </div>
                
                <div className="col-sm-12 col-md-5 text-right">
                    <span className="pagination-span">
                        <strong>
                            Ir a la Página:{' '}
                        </strong>
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                            }}
                            style={{ width: '60px', borderRadius: '5px', border: '1px solid black' }}
                        />
                    </span>{' '}
                    <select className="pagination-select"
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                        >
                        {[5, 10, 15, 20].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Ver {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
            
    )
}

export default MyTable;
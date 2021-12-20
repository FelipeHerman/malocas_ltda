import React from 'react'

import { useTable, usePagination } from 'react-table'

import './table.css'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

function MyTableDos({ columns, data, fetchData, loading, pageCount: controlledPageCount }) {

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
        // Get the state from the instance
        state: { pageIndex, pageSize },
    } = useTable(
            {
                columns,
                data,
                initialState: { pageIndex: 0, pageSize: 5 }, // Pass our hoisted table state
                manualPagination: true, // Tell the usePagination
                // hook that we'll handle our own data fetching
                // This means we'll also have to provide our own
                // pageCount.
                pageCount: controlledPageCount,
            },
            usePagination
    )

    React.useEffect(() => {
        fetchData({ pageIndex, pageSize })
    }, [fetchData, pageIndex, pageSize])

    return (
        
        <div className="card-body">
            <div className="table-responsive">
                <table {...getTableProps()} className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                    ? column.isSortedDesc
                                        ? ' 🔽'
                                        : ' 🔼'
                                    : ''}
                                </span>
                                </th>
                            ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row)
                            return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                            )
                        })}
                        <tr>
                            {loading ? (
                            // Use our custom loading state to show a loading indicator
                            <td colSpan="10000">Loading...</td>
                            ) : (
                            <td colSpan="10000">
                                Showing {page.length} of ~{controlledPageCount * pageSize}{' '}
                                results
                            </td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="row">

                <div className="col-sm-12 col-md-7">
                    <button className="boton" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </button>{' '}
                    <button className="boton" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </button>{' '}
                    <button className="boton" onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </button>{' '}
                    <button className="boton" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </button>{' '}
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{' '}
                    </span>
                </div>

                <div className="col-sm-12 col-md-5 text-right">
                    <span className="pagination-span">
                        Ir a la Página:{' '}
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                            }}
                            style={{ width: '100px' }}
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

export default MyTableDos;
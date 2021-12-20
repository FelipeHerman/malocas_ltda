import React from 'react';

import campo4 from '../../assets/images/campo4.jpg';
import campo5 from '../../assets/images/campo5.jpg';

const Information = () => {

    return (
        <div id="informacion">
            <div className="bg-success py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-12 col-lg-5">
                            <p className="fs-2 fw-bold lh-1 text-white mb-4">Malocas Ltda</p>
                            <p className="lead fw-normal text-white mb-5 mb-lg-0">Malocas Ltda App es el mejor sistema de gestión de información técnica y administrativa. Es adaptable a cualquier cultivo y el usuario lo personaliza a su medida para realizar control de su Agronegocio, hacer gestión con información confiable y oportuna, y disfrutar de los mejores resultados.</p>
                        </div>
                        <div className="col-sm-8 col-md-6 d-sm-none d-none d-lg-block">
                            <img className="img-fluid rounded-circle"
                                src={campo4} alt="..." style={{ height: '25rem', width: '25rem', borderRadius: '18px' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-sm-none d-none d-lg-block">
                <img src={campo5} alt="" style={{ height: '90vh', width: '100%' }} />
            </div>
        </div>
    )

}

export default Information;
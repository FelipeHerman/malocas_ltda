import React from 'react';

import campo3 from '../../assets/images/campo3.jpg';
import siembra2 from '../../assets/images/siembra2.png';
import siembra from '../../assets/images/siembra.png';
import granja from '../../assets/images/granja.png';
import ecologia from '../../assets/images/ecologia.png';

const Services = () => {

    return (
        <section id="servicios">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                        <div className="container-fluid px-5">
                            <div className="row gx-5">
                                <div className="col-md-6 mb-5">
                                    <div className="text-center">
                                        <img src={siembra2} alt="" style={{ height: '5rem', width: '5rem' }}></img>
                                        <h3 className="font-alt">Eficiencia</h3>
                                        <p className="text-muted mb-0">Obtener el mayor rendimiento y el mejor resultado a partir del manejo eficiente de los recursos productivos.</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div className="text-center">
                                        <img src={granja} alt="" style={{ height: '5rem', width: '5rem' }}></img>
                                        <h3 className="font-alt">Medio Ambiente</h3>
                                        <p className="text-muted mb-0">Apoyamos y garantizamos la reducción del impacto vinculado a la actividad agrícola.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <div className="text-center">
                                        <img src={siembra} alt="" style={{ height: '5rem', width: '5rem' }}></img>
                                        <h3 className="font-alt">Calidad</h3>
                                        <p className="text-muted mb-0">Fertilizantes, agroquímicos, semillas, materiales para la siembra, maquinaria y equipos de la más optima calidad.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-center">
                                        <img src={ecologia} alt="" style={{ height: '5rem', width: '5rem' }}></img>
                                        <h3 className="font-alt">Control</h3>
                                        <p className="text-muted mb-0">Método de control de plagas y enfermedades, con el uso de organismos beneficiosos y prácticas culturales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-lg-0">
                        <img src={campo3} alt="" style={{ height: '25rem', width: '25rem', borderRadius: '18px' }}></img>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Services;
import React from 'react';

import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import campo1 from '../assets/images/campo1.jpg';

var md5 = require('md5');

const Register = () => {

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Se requiere la contraseña')
            .min(5, 'La contraseña debe tener al menos 6 caracteres'),

        confirmPassword: Yup.string()
            .required('Se requiere la confirmación de contraseña')
            .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    const createUsuario = (e) => {

        const url = 'http://localhost:5000/usuarios/';

        const usuarios = {
            nombres: e.nombres,
            apellidos: e.apellidos,
            email: e.email,
            password: md5(e.password),
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(usuarios),
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => Swal.fire({
                                title: 'Usuario Guardado con éxito',
                                confirmButtonText: 'OK',
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        window.location.href = "/login";
                                    } 
                                })
                    )
    }

    return (
        <div className="SingUp" style={{ backgroundColor: '#E4FFD2', height: '100vh' }}>
            <div className="container-fluid py-4 px-5">
                <div className="row">
                    <div className="card col-md-8 text-center shadow px-0 mx-auto" style={{ borderRadius: '18px', borderStyle: 'none' }}>
                        <div className="row g-0" >
                            <div className="col-md-6 d-sm-none d-none d-md-block">
                                <img src={campo1} className="img-fluid" style={{ borderRadius: '18px 0px 0px 18px', borderStyle: 'none', height: '100%' }} alt="..." />
                            </div>
                            <div className="col-sm-8 col-xs-12 col-md-6">
                                <div className="card-body">
                                    <div className="d-flex justify-content-end">
                                        <Link to="/"><button className="btn-close" /></Link>
                                    </div>
                                </div>
                                <div className="pb-3 justify-content-center">
                                        <p className="fs-3 pt-5 fw-bold">Crear cuenta</p>
                                    </div>
                                <Form className="fs-5" id="form_rgstr" onSubmit={handleSubmit(createUsuario)}>

                                    <Form.Group className="row mb-3">
                                        <Form.Control type="text" className="col rounded-pill mx-2 border-success border-2" placeholder="Nombres" name="nombres" {...register('nombres')}/>

                                        <Form.Control type="text" className="col rounded-pill mx-2 border-success border-2" placeholder="Apellidos" name="apellidos" {...register('apellidos')}/>
                                    </Form.Group>

                                    <Form.Group className="row mb-3 me-0">
                                        <Form.Control type="email" className="col rounded-pill mx-2 border-success border-2" placeholder="Email" name="email" {...register('email')}/>
                                    </Form.Group>

                                    <Form.Group className="row mb-3">                               
                                        <Form.Control type="password" 
                                        {...register('password')} className={`col rounded-pill mx-2 border-success border-2 ${errors.password ? 'is-invalid' : ''}`}
                                        placeholder="Contraseña" name="password"/>
                                        
                                        <Form.Control type="password" 
                                        {...register('confirmPassword')} className={`col rounded-pill mx-2 border-success border-2 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                        placeholder="Repetir Contraseña" name="confirmPassword"/>
                                    </Form.Group>

                                    <Form.Group className="d-grid gap-1 py-3">
                                        <Button className="btn btn-success btn-lg rounded-pill" type='submit'>
                                            REGISTRARSE
                                        </Button>
                                    </Form.Group>

                                </Form>
                                
                                <hr />
                                <div className="text-center">
                                    <Link className="fs-6 text-success text-decoration-none" to="/login">¡Inicia sesión en Malocas!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Register;
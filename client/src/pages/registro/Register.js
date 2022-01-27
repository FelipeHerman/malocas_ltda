import React from 'react';

import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2'

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import '../registro/formStyles.css'

var md5 = require('md5');

const Register = () => {

    const validationSchema = Yup.object().shape({
        nombres: Yup.string()
            .required('Se requieren los nombres'),

        apellidos: Yup.string()
            .required('Se requieren los apellidos'),

        email: Yup.string()
            .required('Correo electrónico es requerido')
            .email('El correo electrónico es invalido'),

        password: Yup.string()
            .required('Se requiere la contraseña')
            .min(5, 'Debe tener mínimo 5 caracteres'),

        confirmPassword: Yup.string()
            .required('Se requiere confirmar la contraseña')
            .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir'),

        acceptTerms: Yup.bool()
            .oneOf([true], 'Aceptar Ts & Cs es obligatorio')
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
                                icon: 'success',
                                title: 'Usuario Guardado con éxito',
                                confirmButtonColor: '#198754',
                                confirmButtonText: 'OK',
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        window.location.href = "/login";
                                    } 
                                })
                    )
    }

    return (
        <div className="containerForm">
            <div className="abs-center">

                <div className="myCard2 card border-0 px-4 px-sm-5 py-5">
                    <h3 class="mb-1">Registrarse en Malocas Ltda.</h3>
                    <p class="mb-4 text-sm">Crea nuestra cuenta y obtendrás todos los beneficios.</p>

                    <Form onSubmit={handleSubmit(createUsuario)}>

                        <div className="row mb-3">
                            <Form.Group className="col-md-6 myForm-control"> 
                                <label className="mb-0">
                                    <h6 className="mb-0 text-sm">Nombres:</h6>
                                </label> 
                                <Form.Control name="nombres" type="text" {...register('nombres')} className={`myInput ${errors.nombres ? 'is-invalid' : ''}`} placeholder="Nombres" />
                                <small className="mySmall">{errors.nombres?.message}</small>
                            </Form.Group>

                            <Form.Group className="col-md-6 myForm-control"> 
                                <label className="mb-0">
                                    <h6 className="mb-0 text-sm">Apellidos:</h6>
                                </label> 
                                <Form.Control name="apellidos" type="text" {...register('apellidos')} className={`myInput ${errors.apellidos ? 'is-invalid' : ''}`} placeholder="Apellidos" />
                                <small className="mySmall">{errors.apellidos?.message}</small>
                            </Form.Group>
                        </div>
                    
                        <div className="row mb-3">
                            <Form.Group className="col-md myForm-control">
                                <label className="mb-0">
                                    <h6 className="mb-0 text-sm">Email:</h6>
                                </label> 
                                <Form.Control name="email" type="text" {...register('email')} className={`myInput ${errors.email ? 'is-invalid' : ''}`} placeholder="Correo Electrónico" />
                                <small className="mySmall">{errors.email?.message}</small>
                            </Form.Group>
                        </div>
        
                        <div className="row mb-3">
                            <Form.Group className="col-md-6 myForm-control"> 
                                <label className="mb-0">
                                    <h6 className="mb-0 text-sm">Contraseña:</h6>
                                </label> 
                                <Form.Control type="password" 
                                {...register('password')} className={`myInput ${errors.password ? 'is-invalid' : ''}`}
                                placeholder="Contraseña" name="password"/>
                                <small className="mySmall">{errors.password?.message}</small>
                            </Form.Group>

                            <Form.Group class="col-md-6 myForm-control"> 
                                <label class="mb-0">
                                    <h6 class="mb-0 text-sm">Repetir Contraseña:</h6>
                                </label> 
                                <Form.Control type="password" 
                                {...register('confirmPassword')} className={`myInput ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                placeholder="Repetir Contraseña" name="confirmPassword"/>
                                <small className="mySmall">{errors.confirmPassword?.message}</small>
                            </Form.Group>
                        </div>

                        <div className="row mb-3">
                            <Form.Group className="col-md myForm-control">
                                <Form.Check label="Aceptar terminos & Condiciones" name="acceptTerms" {...register('acceptTerms')} id="acceptTerms" className={`myCheck-is-normal ${errors.acceptTerms ? 'myCheck-is-invalid ' : ''}`} />
                            </Form.Group>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md"> 
                                <Button className="btn btn-insert text-center mb-1 py-2" type='submit'>
                                    CREAR CUENTA
                                </Button> 
                            </div>
                        </div>

                    </Form>

                    <div className="col-md"> 
                        <small className="text-muted">
                            ¿Ya tienes una cuenta? 
                                <Link to="/login" className="text-primary"> Inicia Sesiòn </Link> 
                            o 
                                <Link to="/" className="text-primary"> Vuelve a Inicio </Link>
                        </small> 
                    </div>

                </div>

            </div>
        </div>
    )

}

export default Register;
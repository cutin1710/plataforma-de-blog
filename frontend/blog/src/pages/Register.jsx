import React from 'react'
import './Register.css'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'



const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

export default () => {

    const handleRegister = async (values) => {
        axios.post('http://localhost:8800/register', {
            email: values.email,
            password: values.password
        }).then((response) => {
            console.log(response)
        })
    }

    const validationRegister = yup.object().shape({
        email: yup
        .string()
        .email('Digite um email válido.')
        .required('Este campo é obrigatório.'),

        password: yup
        .string()
        .min(8, 'A senha deve conter no mínimo 8 caracteres')
        .required('Este campo é obrigatório.'),

        confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "As senhas não são iguais")
        .required("Este campo é obrigatório")
    })


    return (
        <Div>
            <Formik initialValues={{}} onSubmit={handleRegister} validationSchema={validationRegister}>
                <Form>
                    <div className='form-group'>
                        <Field name='email' type='email' className='form-field' placeHolder='Email' />
                        <ErrorMessage component='span' name='email' className='form-error' />
                    </div>
                    <div className='form-group'>
                        <Field name='password' type='password' className='form-field' placeHolder='Password' />
                        <ErrorMessage component='span' name='password' className='form-error' />
                    </div>
                    <div className='form-group'>
                        <Field name='confirmPassword' type='password' className='form-field' placeHolder='Confirm Password' />
                        <ErrorMessage component='span' name='confirmPassword' className='form-error' />
                    </div>
                    <button className='button' type='submit'>Cadastrar</button>
                </Form>
            </Formik>
        </Div>
    )
}
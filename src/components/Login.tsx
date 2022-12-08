import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useForm } from "../hooks/useForm";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

interface ILoginValues {
    email: string, 
    password: string
}

function Login() {
    const nav = useNavigate();
    // defining the initial state for the form
    const initialState: ILoginValues = {
        email: "",
        password: "",
    };

    // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        // console.log('values: ', values as ILoginValues)
        const { email, password } = values
        axios.post(`${process.env.REACT_APP_API_URL}/login`, {
            user: {
                email: email,
                password: password
            }
        })
        .then(res => {
            const token = res.headers.authorization && res.headers.authorization.split(' ')[1]
            localStorage.setItem('token', token as string)
            nav('/');
            alert('Logged in;')
        }
        )
        .catch(err => console.log(err))
    }

    return (    
        <Form onSubmit={onSubmit}>
            <h2>Login</h2>
            <FormGroup>
                <Label>Email</Label>
                <Input
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Email'
                    onChange={onChange}
                    required
                    />
                <Label>Password</Label>
                <Input
                    name='password'
                    id='password'
                    type='password'
                    placeholder='Password'
                    onChange={onChange}
                    required
                    />
                <Button type='submit'>Login</Button>
            </FormGroup>
        </Form>
    );
}

export default Login;
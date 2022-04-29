import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();



    const navigateLogin= ()=>{
        navigate('/login')
    }
    return (
        <div className='register-form container inventory py-5'>
            <h2>Please <span>Register</span></h2>
            <Row>
                <Col lg='3'></Col>
                <Col lg='6'>
                    <div className=' border mt-4 login'>
                        <Form className='text-start p-4 mt-4 '>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter your name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" autoComplete='on' required />
                            </Form.Group>
                            <Button className='w-100 py-2 login-btn'  type="submit">
                                <span>Register</span>
                            </Button>
                        </Form>
                        <p>Already have an account? <span onClick={navigateLogin} style={{ cursor: 'pointer', color:'orange' }}>Login Now</span></p>
                        <SocialLogin />
                    </div>
                </Col>
                <Col lg='3'></Col>
            </Row>

        </div>
    );
};

export default Register;
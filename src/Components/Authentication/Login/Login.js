import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    return (
        <div className='container py-4 inventory' style={{ height: '86vh' }}>
            <h2>Please <span>Login</span></h2>
            <Row className='pb-4 '>
                <Col lg='3'></Col>
                <Col lg='6' sm='12'>
                    <div className='m-auto border mt-4 login'>
                        <Form className='text-start p-4 mt-4'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className='py-2' type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className='py-2' type="password" placeholder="Password" autoComplete='on' required />
                            </Form.Group>
                            <Button style={{ fontSize: '18px' }} className='w-100 py-2 login-btn' type="submit">
                                Login
                            </Button>
                        </Form>
                        <div>
                            <p>New Admin? <span style={{ cursor: 'pointer' }}> Register Now</span></p>
                            <p>Forgot Password? <span style={{ cursor: 'pointer' }}>Reset</span></p>
                            <SocialLogin/>
                        </div>
                    </div>
                </Col>
                <Col lg='6' ></Col>
            </Row>
            

        </div>
    );
};

export default Login;
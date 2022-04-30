import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


    const navigateRegister = ()=>{
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading ) {
        return <Loading />
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Incorrect Username or Password. Try Again!</p>
    } 
    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)

    }
    return (
        <div className='container py-3 inventory' style={{ height: '86vh' }}>
            <h2>Please <span>Login</span></h2>
            <Row className='pb-4 '>
                <Col lg='3'></Col>
                <Col lg='6' sm='12'>
                    <div className='m-auto border mt-4 login'>
                        <Form onSubmit={handleSubmit} className='text-start p-4 mt-4'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className='py-2' ref={emailRef} type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className='py-2' ref={passwordRef} type="password" placeholder="Password" autoComplete='on' required />
                            </Form.Group>
                            <Button style={{ fontSize: '18px' }} className='w-100 py-2 login-btn' type="submit">
                                Login
                            </Button>
                        </Form>
                        {errorElement}
                        <div>
                            <p>New Admin? <span onClick={navigateRegister} style={{ cursor: 'pointer' }}> Register Now</span></p>
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
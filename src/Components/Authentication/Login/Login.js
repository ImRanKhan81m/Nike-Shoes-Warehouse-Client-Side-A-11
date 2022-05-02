
import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

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
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const navigateRegister = () => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter your email address.')
        }
    }

    if (loading) {
        return <Loading />
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Incorrect Username or Password. Try Again!</p>
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
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
                            <p>Forgot Password? <span onClick={resetPassword} style={{ cursor: 'pointer' }}>Reset</span></p>
                            <SocialLogin />
                        </div>
                    </div>
                    <ToastContainer />
                </Col>
                <Col lg='6' ></Col>
            </Row>


        </div>
    );
};

export default Login;
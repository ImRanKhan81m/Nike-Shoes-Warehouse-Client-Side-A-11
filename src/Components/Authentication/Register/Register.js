import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigateLogin= ()=>{
        navigate('/login')
    }
    if(loading){
        return <Loading/>
    }
    if (user) {
        navigate(from, { replace: true })
    }
    let errorElement;
    if (error) {
       errorElement = <p className='text-danger'>Email already registered!</p>
    }

    const handleRegister= async(event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        // navigate('/')
    }
    
    return (
        <div className='register-form container inventory py-3'>
            <h2>Please <span>Register</span></h2>
            <Row>
                <Col lg='3'></Col>
                <Col lg='6'>
                    <div className=' border mt-4 login'>
                        <Form onSubmit={handleRegister} className='text-start p-4 mt-4 '>
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
                                <Form.Control type="password" name='password' placeholder="Password (at least 6 words)" autoComplete='on' required />
                            </Form.Group>
                            <Button className='w-100 py-2 login-btn'  type="submit">
                                <span>Register</span>
                            </Button>
                        </Form>
                        {errorElement}
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
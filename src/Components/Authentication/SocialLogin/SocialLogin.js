import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import googleLogo from '../../images/logo/Google.png'
import githubLogo from '../../images/logo/GitHub.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";


    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading) {
        return <Loading />
    }
    if (user) {
        navigate(from, { replace: true })
    }



    return (
        <div className='pb-4'>
            <div className='d-flex align-items-center mb-3'>
                <div style={{ height: '1px' }} className='bg-dark w-50 ms-5 me-3'></div>
                <p className='mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50 me-5 ms-3'></div>
            </div>
            {errorElement}
            <div>
                <div className='mb-3'>
                    <Button
                        onClick={() => signInWithGoogle()}
                        style={{ fontSize: '20px' }} className='btn btn-light px-4 py-2 w-75 login-btn'>
                        <Row>
                            <Col lg='4' md='3' sm='6' className='text-end '>
                                <img src={googleLogo} alt="" />
                            </Col>
                            <Col lg='8' md='9' sm='6' className='text-start'>
                                <span className='px-2'>Google Sign In</span>
                            </Col>
                        </Row>
                    </Button>
                </div>

                <div className='mb-3 '>
                    <Button
                        style={{ fontSize: '20px' }} className='btn btn-light px-4 py-2 w-75 login-btn'>
                        <Row>
                            <Col lg='4' md='3' sm='2' className='text-end'>
                                <img src={githubLogo} alt="" />
                            </Col>
                            <Col lg='8' md='9' sm='10' className='text-start'>
                                <span className='px-2'>Github Sign In</span>
                            </Col>
                        </Row>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;
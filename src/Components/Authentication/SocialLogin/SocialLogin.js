import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const SocialLogin = () => {
    return (
        <div className='pb-4'>
            <div className='d-flex align-items-center mb-3'>
                <div style={{ height: '1px' }} className='bg-dark w-50 ms-5 me-3'></div>
                <p className='mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50 me-5 ms-3'></div>
            </div>
            <div>
                <div className='mb-3'>
                    <Button
                        style={{ fontSize: '20px'}} className='btn btn-light px-4 py-2 w-75 login-btn'>
                        <Row>
                            <Col lg='4' md='3' sm='6' className='text-end '>
                                <img src={'googleLogo'} alt="" />
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
                                <img src={'githubLogo'} alt="" />
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
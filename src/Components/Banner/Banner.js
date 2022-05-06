import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Banner.css'
import img1 from '../images/home-shoe-3.png'

const Banner = () => {
    return (
        <div className='carousel-section' id='home'>
                    <div>
                        <Row>
                            <Col lg='6' className='d-flex justify-content-center align-items-center'>
                                <div className='text-start '>
                                    <div className='banner-text ms-lg-5 ms-md-0 ps-lg-5 mt-lg-5'>
                                    <span>Nike Yellow Shoes</span>
                                    <h2>Nike Metcon Shoes</h2>
                                    <p>The Nike Metcon is built for the way you train, with a locked-in fit, unshakeable stability and ground-gripping traction that make a real difference in the ...</p>
                                    <button className='details-btn'>See Details</button>
                                    </div>
                                </div>
                            </Col>
                            <Col  lg='6'>
                                <div className='banner-img pb-5'>
                                    <img src={img1} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
        </div>
    );
};

export default Banner;
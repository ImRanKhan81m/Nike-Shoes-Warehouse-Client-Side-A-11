import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Banner.css'
import img1 from '../images/home-shoe-3.png'

const Banner = () => {
    return (
        <div className='carousel-section'>
                    <div>
                        <Row>
                            <Col lg='6' className='d-flex justify-content-center align-items-center'>
                                <div className='text-start '>
                                    <div className='banner-text ms-5 ps-5 mt-5'>
                                    <span>Nike Yellow Shoes</span>
                                    <h2>Nike Metcon Shoes</h2>
                                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                    <button className='details-btn'>See Details</button>
                                    </div>
                                </div>
                            </Col>
                            <Col  lg='6'>
                                <div className='banner-img'>
                                    <img src={img1} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
        </div>
    );
};

export default Banner;
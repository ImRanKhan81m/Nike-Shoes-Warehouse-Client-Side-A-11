import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Banner.css'
import img1 from '../images/home-shoe-3.png'
import img2 from '../images/home-shoe-2.png'
import img3 from '../images/home-shoe-1.png'

const Banner = () => {
    return (
        <div className='carousel-section'>
            <Carousel>
                <Carousel.Item>
                    <div>
                        <Row>
                            <Col>
                                <div className='text-start'>
                                    <p>Nike Yellow Shoes</p>
                                    <h2>Nike Metcon Shoes</h2>
                                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                    <button className='btn btn-primary'>See Details</button>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img src={img1} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <Row>
                            <Col>
                                <div>
                                    <p>Nike Yellow Shoes</p>
                                    <h2>Nike Metcon Shoes</h2>
                                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                    <button className='btn btn-primary'>See Details</button>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img src={img2} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <Row>
                            <Col>
                                <div>
                                    <p>Nike Yellow Shoes</p>
                                    <h2>Nike Metcon Shoes</h2>
                                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                    <button className='btn btn-primary'>See Details</button>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <img src={img3} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
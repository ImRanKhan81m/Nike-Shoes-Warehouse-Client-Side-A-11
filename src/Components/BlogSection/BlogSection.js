import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../images/download-img/blog5_1024x1024.webp'
import img2 from '../images/download-img/blog3_1024x1024.jpg'
import './BlogSection.css'

const BlogSection = () => {
    return (
        <div>
            <div className='inventory my-3 '>
                <h2>OUR <span>BLOG</span></h2>
            </div>
            <Container>
                <Row className='mb-5'>
                    <Col lg='5' className=' d-flex justify-content-center align-items-center text-start'>
                        <div className='pe-5 blog-section-details'>
                            <h3>10 of The World's Rarest Sneakers</h3>
                            <p>By definition, a minimalist is someone that lives a simple and decluttered life without too many possessions. The physical items that they do own either hold a specific purpose, or...</p>
                            <button>READ MORE</button>
                        </div>
                    </Col>
                    <Col lg='7'>
                        <div className='blog-section-img'>
                            <img src={img1} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col lg='7'>
                        <div className='blog-section-img'>
                            <img src={img2} alt="" />
                        </div>
                    </Col>
                    <Col lg='5' className=' d-flex justify-content-center align-items-center text-start'>
                        <div className='ps-5 blog-section-details'>
                            <h3>Low Sneakers, Running Shoes Or High Sneakers</h3>
                            <p>By definition, a minimalist is someone that lives a simple and decluttered life without too many possessions. The physical items that they do own either hold a specific purpose, or...</p>
                            <button>READ MORE</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogSection;
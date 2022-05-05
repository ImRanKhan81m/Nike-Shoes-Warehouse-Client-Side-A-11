import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../images/download-img/ba6.webp'
import './Saving.css'

const Saving = () => {
    return (
        <div className='saving-section mt-5'>
            <Container>
                <Row className='p-4'>
                    <Col lg='6'>
                        <div className='saving-section-img'>
                            <img src={img} alt="" />
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='saving-section-details p-3 text-start text-white'>
                            <h4>Saving 50%</h4>
                            <h1>All Online Store</h1>
                            <h3>Offer Available All Shoes & Products</h3>
                            <button>More Details</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Saving;
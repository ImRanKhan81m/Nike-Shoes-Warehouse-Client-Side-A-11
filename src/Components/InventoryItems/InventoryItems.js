import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './InventoryItems.css'
import img1 from '../images/f-img-1.1.png'

const InventoryItems = () => {
    return (
        <div className='mt-5 py-5'>
            <Container className='inventory'>
                <h2><span>Inventory</span> Products</h2>
                <div>
                    <div className='inventories'>
                        <div className='inventory-items'>
                            <Row>
                                <Col lg='4' md='4'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='8' md='8'>
                                    <div className='text-start'>
                                        <h3>Product Name</h3>
                                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                    </div>
                                </Col>bb 
                            </Row>
                        </div>
                        <div className='inventory-items'>
                            <Row>
                                <Col lg='4' md='4'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='8' md='8'>
                                    <div className='text-start'>
                                        <h3>Product Name</h3>
                                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default InventoryItems;
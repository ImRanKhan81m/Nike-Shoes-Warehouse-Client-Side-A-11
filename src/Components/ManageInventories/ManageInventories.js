import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img1 from '../images/f-img-3.1.png'
import './ManageInventories.css'

const ManageInventories = () => {
    return (
        <div className=' py-5'>
            <div className='manage-inventory inventory'>
                <h2><span>Manage</span> Inventories</h2>
                <div className='mt-5'>
                    <div className='manage-inventories'>
                        <div className='inventory-items p-4'>
                            <Row>
                                <Col lg='12' md='12' className='d-flex justify-content-center align-items-center mb-md-4 mb-4'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='12' md='12'>
                                    <div className='text-start inventory-detail'>
                                        <h3>Product Name</h3>
                                        <p style={{ color: 'gray' }}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                        <button className='inventory-btn mt-3 me-3'>Update</button>
                                        <button className='inventory-btn mt-3'>Delete</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='inventory-items p-4'>
                            <Row>
                                <Col lg='12' md='12' className='d-flex justify-content-center align-items-center mb-md-4 mb-4'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='12' md='12'>
                                    <div className='text-start inventory-detail'>
                                        <h3>Product Name</h3>
                                        <p style={{ color: 'gray' }}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                        <button className='inventory-btn mt-3 me-3'>Update</button>
                                        <button className='inventory-btn mt-3'>Delete</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='inventory-items p-4'>
                            <Row>
                                <Col lg='12' md='12' className='d-flex justify-content-center align-items-center mb-md-4 mb-4'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='12' md='12'>
                                    <div className='text-start inventory-detail'>
                                        <h3>Product Name</h3>
                                        <p style={{ color: 'gray' }}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                        <button className='inventory-btn mt-3 me-3'>Update</button>
                                        <button className='inventory-btn mt-3'>Delete</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='inventory-items p-4'>
                            <Row>
                                <Col lg='12' md='12' className='d-flex justify-content-center align-items-center mb-md-4 mb-4'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='12' md='12'>
                                    <div className='text-start inventory-detail'>
                                        <h3>Product Name</h3>
                                        <p style={{ color: 'gray' }}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                        <button className='inventory-btn mt-3 me-3'>Update</button>
                                        <button className='inventory-btn mt-3'>Delete</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventories;
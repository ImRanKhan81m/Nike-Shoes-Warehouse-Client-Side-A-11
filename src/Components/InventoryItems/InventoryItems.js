import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './InventoryItems.css'
import img1 from '../images/f-img-3.1.png'

const InventoryItems = () => {
    return (
        <div className='mt-5 py-5'>
            <div className='inventory'>
                <h2><span>Inventory</span> Products</h2>
                <div className='mt-5'>
                    <div className='inventories'>
                        <div className='inventory-items p-4'>
                            <Row>
                                <Col lg='4' md='4' className='d-flex justify-content-center align-items-center'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='8' md='8'>
                                    <div className='text-start inventory-detail'>
                                        <h3>Product Name</h3>
                                        <p style={{color:'gray'}}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                        <button className='inventory-btn mt-3'>Manage Product</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='inventory-items p-4'>
                            <Row>
                                <Col lg='4' md='4' className='d-flex justify-content-center align-items-center'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='8' md='8'>
                                    <div className='text-start inventory-detail'>
                                        <h3>Product Name</h3>
                                        <p style={{color:'gray'}}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                        <button className='inventory-btn mt-3'>Manage Product</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='inventory-items p-4'>
                            <Row>
                                <Col lg='4' md='4' className='d-flex justify-content-center align-items-center'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='8' md='8'>
                                    <div className='text-start inventory-detail'>
                                        <h3>Product Name</h3>
                                        <p style={{color:'gray'}}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                        <button className='inventory-btn mt-3'>Manage Product</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='inventory-items p-4'>
                            <Row>
                                <Col lg='4' md='4' className='d-flex justify-content-center align-items-center'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='8' md='8'>
                                    <div className='text-start inventory-detail'>
                                        <h3>Product Name</h3>
                                        <p style={{color:'gray'}}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                        <button className='inventory-btn mt-3'>Manage Product</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='inventory-items p-4'>
                            <Row>
                                <Col lg='4' md='4' className='d-flex justify-content-center align-items-center'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='8' md='8'>
                                    <div className='text-start inventory-detail'>
                                        <h3>Product Name</h3>
                                        <p style={{color:'gray'}}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                        <button className='inventory-btn mt-3'>Manage Product</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='inventory-items p-4'>
                            <Row>
                                <Col lg='4' md='4' className='d-flex justify-content-center align-items-center'>
                                    <div>
                                        <img src={img1} alt="" />
                                    </div>
                                </Col>
                                <Col lg='8' md='8'>
                                    <div className='text-start inventory-detail'>
                                        <h3>Product Name</h3>
                                        <p style={{color:'gray'}}>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Repellat Maiores Et Eos Eaque Veritatis Aut Laboriosam Earum Dolorem Iste Atque.</p>
                                        <p><span>Price:</span> $199</p>
                                        <p><span>Quantity:</span> 56pcs</p>
                                        <p><span>Supplier Name:</span> Imran Hossen</p>
                                        <button className='inventory-btn mt-3'>Manage Product</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <button className='manage-btn mt-5'>Manage Inventories</button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './InventoryItems.css'
import img1 from '../images/f-img-3.1.png'

const InventoryItems = ({ product }) => {
    return (
        <div className='inventory-items p-4'>
            <Row>
                <Col lg='4' md='4' className='d-flex justify-content-center align-items-center'>
                    <div>
                        <img src={product.imgURL} alt="" />
                    </div>
                </Col>
                <Col lg='8' md='8'>
                    <div className='text-start inventory-detail'>
                        <h3>{product.shoeName}</h3>
                        <p style={{ color: 'gray' }}>{product.description}</p>
                        <p><span>Price:</span> {product.price}</p>
                        <p><span>Quantity:</span> {product.quantity}pcs</p>
                        <p><span>Supplier Name:</span> {product.supplierName}</p>
                        <button className='inventory-btn mt-3'>Manage Product</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default InventoryItems;
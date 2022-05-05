import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ManageInventories.css'

const ManageInventories = ({product, handleDelete,isReload,setIsReload}) => {
    const navigate = useNavigate();
    const handleUpdateProduct = id =>{
        navigate(`/shoes/${id}`)
    }

    return (
        <div className='inventory-items p-4'>
            <Row>
                <Col lg='12' md='12' className='d-flex justify-content-center align-items-center mb-md-4 mb-4'>
                    <div>
                        <img src={product.imgURL} alt="" />
                    </div>
                </Col>
                <Col lg='12' md='12'>
                    <div className='text-start inventory-detail'>
                        <h3>{product.shoeName}</h3>
                        <p style={{ color: 'gray' }}>{product.description}</p>
                        <p><span>Supplier Name:</span> {product.supplierName}</p>
                        <p><span>Quantity:</span> {product.quantity} Pcs</p>
                        <p><span>Price:</span> {product.price}</p>
                        <button 
                        onClick={()=>handleUpdateProduct(product._id)}
                        className='inventory-btn mt-3 me-3'>Update</button>
                        <button
                         onClick={()=>handleDelete(product._id)}
                         className='delete-btn mt-3'>Delete</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ManageInventories;
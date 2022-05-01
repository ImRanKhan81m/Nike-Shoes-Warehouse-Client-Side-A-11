import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const { manageId } = useParams();
    console.log(product);


    useEffect(() => {
        const url = `http://localhost:5000/shoes/${manageId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <div className='inventory'>
            <h2 className='mt-3 mb-4 '>Update <span>Inventory</span></h2>
            <Container>
                <Row className='border p-5 shadow update-details'>
                    <Col lg='4' className='py-5'>
                        <div className='px-3 py-5 border shadow update-img'>
                            <img style={{ width: '100%' }} src={product.imgURL} alt="" />
                        </div>
                    </Col>
                    <Col lg='8' className='ps-5 pt-2 '>
                        <div className='text-start inventory-detail ps-5'>
                            <h3>{product.shoeName}</h3>
                            <p style={{ color: 'gray' }}>{product.description}</p>
                            <p><span>Product Id:</span> {product._id}</p>
                            <p><span>Price:</span> {product.price}</p>
                            <p><span>Supplier Name:</span> {product.supplierName}</p>
                            <p><span>Quantity:</span> {product.quantity} Pcs</p>
                            <button
                                className='inventory-btn mt-3 mb-4'>Delivered</button>
                            <div className='update-form'>
                                <input className='border shadow-sm' type="number" />
                                <button className='border shadow-sm'>Add Item</button>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default UpdateProduct;
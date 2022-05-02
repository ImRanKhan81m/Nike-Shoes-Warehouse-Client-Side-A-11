
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const { manageId } = useParams();
    const [isReload, setIsReload] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const url = `https://young-caverns-12547.herokuapp.com/shoes/${manageId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [isReload]);

    const handleManage = () => {
        navigate('/manage')
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        const quantity = parseFloat(event.target.quantity.value) + parseFloat(product.quantity);
        if (quantity && quantity >= 0) {
            fetch(`https://young-caverns-12547.herokuapp.com/shoes/${product._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ quantity }),
            })
                .then((res) => res.json())
                .then((data) => setIsReload(!isReload));
        }
        document.getElementById("form").reset();
    };



    const handleDelivered = (event) => {
        const remainingQuantity = parseFloat(product.quantity);
        const quantity = remainingQuantity - 1;
        console.log(quantity);

        if (quantity >= 0) {
            fetch(`https://young-caverns-12547.herokuapp.com/shoes/${product._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ quantity }),
            })
                .then((res) => res.json())
                .then((data) => setIsReload(!isReload));
        }
    }

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
                            {
                                product.quantity > 0 ? <button
                                    onClick={handleDelivered}
                                    className='inventory-btn mt-3 mb-4'
                                >Delivered</button> :
                                    <button
                                        className='inventory-btn mt-3 mb-4'
                                    >Sold Out</button>
                            }
                            <button
                                onClick={handleManage}
                                className='border shadow-sm ms-3 manage-button'>Manage Inventories
                            </button>


                            <form id='form' onSubmit={handleUpdate}
                                className='update-form'>
                                <input className='border shadow-sm' type="number"
                                    name='quantity' />
                                <button

                                    className='border shadow-sm'>ReStock</button>
                            </form>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default UpdateProduct;
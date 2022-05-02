import React from 'react';
import {Col, Container, Form, Row } from 'react-bootstrap';
import './AddInventory.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddInventory = () => {
    const [user] = useAuthState(auth);



    const handlePost = event => {
        event.preventDefault();
        const email = user.email;
        const shoeName = event.target.shoeName.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName = event.target.supplierName.value;
        const imgURL = event.target.imgURL.value;
        // console.log(userName, textData);
    
        fetch("http://localhost:5000/shoes", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({email, shoeName, description, quantity, price, supplierName ,imgURL})
        })
          .then(res => res.json())
          .then(data => {
            toast('New Inventory added successfully!')
            
          })
          event.target.reset();
        //   document.getElementById("form").reset();
      } 
    return (
        <div className='inventory'>
            <h2 className='mt-3 mb-4'>Add New <span>Inventory</span></h2>
            <Container>
                <Row>
                    <Col lg='3'></Col>
                    <Col lg='6' className='border-lg pt-5 px-5 pb-4 shadow addInventory-form'>
                        <Form onSubmit={handlePost} id='form'>
                            <Form.Group className="mb-3 shadow-sm" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter Product Name" name='shoeName' required/>
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <textarea className='w-100 shadow-sm' name="description" id="" placeholder='Write a short description about this product' ></textarea>
                            </Form.Group>
                            <Form.Group className="mb-3 shadow-sm" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter Supplier Name" required name='supplierName'/>
                            </Form.Group>
                            <Form.Group className="mb-3 shadow-sm" controlId="formBasicEmail">
                                <Form.Control type="text" name='imgURL' placeholder="Enter Photo URL" required/>
                            </Form.Group>
                            <Form.Group className="mb-3 shadow-sm" controlId="formBasicPassword">
                                <Form.Control type="number" placeholder="Price" required name='price'/>
                            </Form.Group>
                            <Form.Group className="mb-3 shadow-sm" controlId="formBasicPassword">
                                <Form.Control type="number" placeholder="Quantity" required name='quantity'/>
                            </Form.Group>
                            <button className='manage-btn mt-4'>Add Inventory</button>
                        </Form>
                    </Col>
                    <Col lg='3'></Col>
                </Row>
                <ToastContainer/>
            </Container>
        </div>
    );
};

export default AddInventory;
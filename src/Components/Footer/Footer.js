import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <div className=' px-lg-5 px-3 pb-1 pt-lg-5 footer-section mb-0'>
            <Container className='mx-0 mx-auto'>
                <div className='py-5 footer-details-section'>
                    <div className='text-start footer-details'>
                        <h4>ADDRESS OFFICE</h4>
                        <p><b>460 West 34th Street, 15th floor, Dhaka</b></p>
                        <p><b>Email: </b> imrankhan98m@gmail.com</p>
                        <p><b>Phone: </b> 01309-091104</p>
                        <p><b>Fax: </b> 323 32434 5333</p>
                    </div>
                    <div className='text-start footer-details link'>
                        <h4>FIND OUR WAREHOUSE</h4>
                        <p>COUPON CODE</p>
                        <p>SIGNUP FOR EMAIL</p>
                        <p>SITE FEEDBACK</p>
                        <p>CAREERS</p>
                    </div>
                    <div className='text-start footer-details '>
                            <h4>GET HELP</h4>
                            <p>Order Status</p>
                            <p>Shipping And Delivery</p>
                            <p>Returns</p>
                            <p>Payment Options</p>
                            <p>Contact Us</p>
                    </div>
                    <div className='text-start footer-details'>
                        <h4>PRODUCTS</h4>
                        <p>Shoes</p>
                        <p>Clothing</p>
                        <p>Accessories</p>
                        <p>Football Shoes</p>
                    </div>
                </div>
                <div className='copyright'>
                    <p className='mt-3 py-3 px-3'>Copyright &copy; {getCurrentYear()}-{getCurrentYear() + 2} All Rights Reserved by IMRAN HOSSEN </p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
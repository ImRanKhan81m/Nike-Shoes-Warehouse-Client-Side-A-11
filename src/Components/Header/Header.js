import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo/logo2.png'
import './Header.css'

const Header = () => {
    return (
            <Navbar sticky='top' className='shadow-sm navbarh' collapseOnSelect expand="lg"  variant="light">
                <Container>
                    <Navbar.Brand >
                        <div><Link to={'/'}><img style={{width:'150px'}} src={logo} alt="" /></Link></div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link style={{color:'black'}} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link style={{color:'black'}} href="#pricing">Blog</Nav.Link>
                            <Nav.Link style={{color:'black'}} as={Link} to="/manage">Manage items</Nav.Link>
                            <Nav.Link style={{color:'black'}} href="#deets">Add Item</Nav.Link>
                            <Nav.Link style={{color:'black'}} href="#deets">My Items</Nav.Link>
                            <Nav.Link style={{color:'black'}} as={Link} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;
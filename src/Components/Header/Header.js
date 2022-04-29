import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo2.png'

const Header = () => {
    return (
        <header>
            <Navbar className='shadow-sm' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <div><img style={{width:'100px'}} src={logo} alt="" /></div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Nav.Link href="#deets">Manage items</Nav.Link>
                            <Nav.Link href="#deets">Add Item</Nav.Link>
                            <Nav.Link href="#deets">My Items</Nav.Link>
                            <Nav.Link href="#deets">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
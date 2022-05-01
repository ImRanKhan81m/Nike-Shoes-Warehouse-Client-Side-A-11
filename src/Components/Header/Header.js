import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../images/logo/logo2.png'
import './Header.css'
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar sticky='top' className='shadow-sm navbarh' collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand >
                    <div><Link to={'/'}><img style={{ width: '150px' }} src={logo} alt="" /></Link></div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-item">
                        <CustomLink  to="/">Home</CustomLink>
                        <CustomLink  to="/blog">Blog</CustomLink>
                        {
                            user && <>
                                <CustomLink to="/manage">Manage items</CustomLink>
                                <CustomLink to={'/addInventory'} >Add Item</CustomLink>
                                <CustomLink to={'/myItems'} >My Items</CustomLink>
                            </>
                        }
                        {
                            user ?
                                <CustomLink to={'/login'} onClick={handleSignOut}>
                                    Log Out
                                </CustomLink> :
                                <CustomLink to="/login">Login</CustomLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div style={{minHeight:'90vh'}} className='notfound mt-5 pt-5'>
            <div>
            <h1>404</h1>
            <h1><span>Oops!!</span> Page Not Found</h1>
            <p className='mt-4'>The Page you are looking for doesn't exist or an other <br /> error occurred. Go to <Link to={'/'}>Home Page</Link> </p>
            </div>
        </div>
    );
};

export default NotFound;
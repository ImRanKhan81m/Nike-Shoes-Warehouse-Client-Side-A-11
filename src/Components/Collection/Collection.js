import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Collection.css'

const Collection = () => {
    return (
        <div className='pt-5 mb-5 me-0 pe-0'>
            <div className='collection'>
                <div  className='p-0 m-0'>
                    <div className='collection-exercise text-start'>
                        <h2>EXERCISE SHOES</h2>
                        <h6>New Collection 2022</h6>
                    </div>
                </div>
                <div className='p-0 m-0'>
                    <div className='collection-sport text-start'>
                        <h2>NEW SHOES SPORT</h2>
                        <h6>New Collection 2022</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
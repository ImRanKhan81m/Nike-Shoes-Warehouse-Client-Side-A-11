import React from 'react';
import img9 from '../images/download-img/bbbba1.webp'
import './SportShoes.css'

const SportShoes = () => {
    return (
        <div className=' men-sports-section my-5'>
            <div className='men-sports'>
                <div className='d-flex justify-content-center align-items-center men-sports-details'>
                    <div>
                        <h1>Men's Sports Shoes</h1>
                        <p>Timeless and evolving, unlimited in expression, we build spaces around the lives we lead Using furnishings and objects of good design, that respect a space's purpose, creates environments that are beautiful and livable—the ones we love best</p>
                        <button>About More</button>
                    </div>
                </div>
                <div className='men-sports-img'>
                    <img src={img9} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SportShoes;
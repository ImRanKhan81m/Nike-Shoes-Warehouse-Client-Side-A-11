import React from 'react';
import './HotDeal.css'
import img1 from '../images/download-img/15.1.webp'
import img2 from '../images/download-img/11.1.webp'
import img3 from '../images/download-img/6.1.webp'
import img4 from '../images/download-img/12.1.webp'
import img5 from '../images/download-img/3.1.webp'
import img6 from '../images/download-img/4.1.webp'
import img7 from '../images/download-img/8.1.webp'
import img8 from '../images/download-img/10.1.webp'

const HotDeal = () => {
    return (
        <div className='inventory'>
            <h2>BEST <span>SELLER</span></h2>
            <p className='deal'>Best Seller Product This Week!</p>
            <div className='hot-deal container pt-4'>
                    <div className='border shadow-sm '>
                        <img src={img1} alt="" />
                    </div>
                    <div className='border shadow-sm'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='border shadow-sm'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='border shadow-sm'>
                        <img src={img4} alt="" />
                    </div>
                    <div className='border shadow-sm'>
                        <img src={img5} alt="" />
                    </div>
                    <div className='border shadow-sm'>
                        <img src={img6} alt="" />
                    </div>
                    <div className='border shadow-sm'>
                        <img src={img7} alt="" />
                    </div>
                    <div className='border shadow-sm'>
                        <img src={img8} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default HotDeal;
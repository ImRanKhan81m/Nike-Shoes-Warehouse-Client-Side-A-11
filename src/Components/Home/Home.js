import React from 'react';
import Banner from '../Banner/Banner';
import BlogSection from '../BlogSection/BlogSection';
import Collection from '../Collection/Collection';
import HotDeal from '../HotDeal/HotDeal';
import InventoryProducts from '../InventoryItems/InventoryProducts';
import Saving from '../Savings/Saving';
import SportShoes from '../SportsShoes/SportShoes';

const Home = () => {
    return (
        
        <div>
            <Banner/>
            <InventoryProducts/>
            <Collection/>
            <BlogSection/>
            {/* <SportShoes/> */}
            {/* <HotDeal/> */}
            <Saving/>
            
        </div>
    );
};

export default Home;
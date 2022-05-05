import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import HotDeal from '../HotDeal/HotDeal';
import InventoryProducts from '../InventoryItems/InventoryProducts';
import SportShoes from '../SportsShoes/SportShoes';

const Home = () => {
    return (
        
        <div>
            <Banner/>
            <InventoryProducts/>
            <Collection/>
            <SportShoes/>
            {/* <HotDeal/> */}
            
        </div>
    );
};

export default Home;
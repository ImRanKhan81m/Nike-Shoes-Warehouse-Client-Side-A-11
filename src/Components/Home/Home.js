import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import InventoryProducts from '../InventoryItems/InventoryProducts';

const Home = () => {
    return (
        <div>
            <Banner/>
            <InventoryProducts/>
            <Collection/>
        </div>
    );
};

export default Home;
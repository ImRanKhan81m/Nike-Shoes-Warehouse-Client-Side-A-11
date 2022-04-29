import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner/>
            <InventoryItems/>
            <Collection/>
        </div>
    );
};

export default Home;
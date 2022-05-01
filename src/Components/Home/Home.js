import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import InventoryItems from '../InventoryItems/InventoryItems';
import InventoryProducts from '../InventoryItems/InventoryProducts';

const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <InventoryItems/> */}
            <InventoryProducts/>
            <Collection/>
        </div>
    );
};

export default Home;
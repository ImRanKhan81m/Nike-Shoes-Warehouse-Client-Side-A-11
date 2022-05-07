import React from 'react';
import Banner from '../Banner/Banner';
import BlogSection from '../BlogSection/BlogSection';
import Collection from '../Collection/Collection';
import InventoryProducts from '../InventoryItems/InventoryProducts';
import Saving from '../Savings/Saving';


const Home = () => {


    return (
        <div>
            <Banner />
            <InventoryProducts />
            <Collection />
            <BlogSection />
            <Saving />

        </div>
    );
};

export default Home;
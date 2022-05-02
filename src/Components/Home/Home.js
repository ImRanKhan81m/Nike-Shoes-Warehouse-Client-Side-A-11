import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import InventoryProducts from '../InventoryItems/InventoryProducts';
import Loading from '../Loading/Loading';

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
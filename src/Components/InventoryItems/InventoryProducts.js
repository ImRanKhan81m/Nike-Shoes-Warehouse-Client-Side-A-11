import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import InventoryItems from './InventoryItems';

const InventoryProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    const [loading] = useAuthState(auth)

    if (loading) {
        <Loading />
    }

    useEffect(() => {
        fetch('https://young-caverns-12547.herokuapp.com/shoes')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, []);

    const handleManage = () => {
        navigate('/manage')
    }

    return (
        <div>
            <div className='mt-lg-5 mt-md-0 py-5'>
                <div className='inventory'>
                    <h2><span>Inventory</span> Products</h2>
                    <div className='mt-5'>
                        <div className='inventories'>
                            {
                                products.map(product => <InventoryItems
                                    key={product._id}
                                    product={product}
                                ></InventoryItems>)
                            }
                        </div>

                        <button onClick={handleManage} className='manage-btn mt-5'>Manage Inventories</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryProducts;




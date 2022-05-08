import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import InventoryItems from './InventoryItems';

const InventoryProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch('https://young-caverns-12547.herokuapp.com/shoes')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 6))
                setLoading(false)
            })
    }, []);

    const handleManage = () => {
        navigate('/manage')
    }

    return (
        <>
            {
                loading ? <Loading /> :
                    <div className='mt-lg-5 mt-md-0 py-0 py-lg-5 py-md-5'>
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
            }
        </>
    );
};

export default InventoryProducts;




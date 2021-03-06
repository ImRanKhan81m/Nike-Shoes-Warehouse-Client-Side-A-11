
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ManageInventories from './ManageInventories';

const ManageInventoriesProduct = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const [isReload, setIsReload] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        fetch('https://young-caverns-12547.herokuapp.com/shoes')
            .then(res => res.json())
            .then(data => {
                setManageProducts(data)
                setLoading(false)
            })
    }, [isReload]);



    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure want to Delete?');
        if (proceed) {
            fetch(`https://young-caverns-12547.herokuapp.com/shoes/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsReload(!isReload);
                });
        }
    };

    const handleAddItem = () => {
        navigate('/addInventory')
    }

    return (
        <>
            {
                loading ? <Loading /> :
                    <div className=' py-3 mb-lg-5'>
                        <div className='manage-inventory inventory'>
                            <h2><span>Manage</span> Inventories</h2>
                            <div>
                                <div className=' mt-4 mb-4 text-end'>
                                    <button
                                        onClick={handleAddItem}
                                        className='inventory-btn '>Add New Inventory</button>
                                </div>
                                <div className='manage-inventories  '>
                                    {
                                        manageProducts.map(manageProduct => <ManageInventories
                                            key={manageProduct._id}
                                            product={manageProduct}
                                            handleDelete={handleDelete}
                                            setIsReload={setIsReload}
                                            isReload={isReload}
                                        ></ManageInventories>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default ManageInventoriesProduct;
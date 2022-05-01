import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageInventories from './ManageInventories';

const ManageInventoriesProduct = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const [isReload, setIsReload] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/shoes')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [isReload]);


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure want to Delete?');
        if(proceed){
            fetch(`http://localhost:5000/shoes/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsReload(!isReload);
            });
        }
    };

    const handleAddItem=() =>{
        navigate('/addInventory')
    }

    return (
        <div>
            <div className=' py-3'>
                <div className='manage-inventory inventory'>
                    <h2><span>Manage</span> Inventories</h2>
                    <div className='mt-5'>
                        <div className=' mb-4 '>
                        <button 
                        onClick={handleAddItem}
                        className='inventory-btn py-2'>Add New Inventory</button>
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
        </div>
    );
};

export default ManageInventoriesProduct;
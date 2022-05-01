import React, { useEffect, useState } from 'react';
import ManageInventories from './ManageInventories';

const ManageInventoriesProduct = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/shoes')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [isReload]);


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure want to Delete?');
        if(proceed){
            fetch(`http://localhost:5000/shoe/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsReload(!isReload);
            });
        }
    };

    return (
        <div>
            <div className=' py-3'>
                <div className='manage-inventory inventory'>
                    <h2><span>Manage</span> Inventories</h2>
                    <div className='mt-5'>
                        <div className='manage-inventories'>
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
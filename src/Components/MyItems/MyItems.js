import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import MyItemsProduct from '../MyItemsProduct/MyItemsProduct';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [isReload, setIsReload] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)
        const getProducts = async () => {
            const email = user?.email;
            const url = `https://young-caverns-12547.herokuapp.com/shoe?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setProducts(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
            setLoading(false)
        };
        getProducts()
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


    return (
        <>
            {
                loading ? <Loading /> :
                    <div className=' py-lg-3 pt-3 mb-5'>
                        <div className='manage-inventory inventory'>
                            <h2>My <span>Items</span> : {products.length} </h2>
                            <div className='mt-lg-5 mt-md-4 mt-3'>
                                <div className='manage-inventories  '>
                                    {
                                        products.map(product => <MyItemsProduct
                                            key={product._id}
                                            product={product}
                                            handleDelete={handleDelete}
                                            setIsReload={setIsReload}
                                            isReload={isReload}
                                        ></MyItemsProduct>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default MyItems;
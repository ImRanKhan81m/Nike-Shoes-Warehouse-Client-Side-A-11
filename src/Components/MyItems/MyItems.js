

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {

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
                    // signOut(auth)
                    navigate('/login')
                }
            }
        };
        getProducts()


        /* fetch(`https://young-caverns-12547.herokuapp.com/shoe?email=${email}`)
        .then(res => res.json())
        .then(data=> setProducts(data)) */
    }, [user]);


    return (
        <div className='inventory'>
            <h2 className='mt-3'>My Items : {products.length}</h2>
        </div>
    );
};

export default MyItems;
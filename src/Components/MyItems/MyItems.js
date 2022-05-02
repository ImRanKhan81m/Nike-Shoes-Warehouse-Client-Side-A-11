import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
  

    useEffect(()=>{
        const email = user?.email;
        console.log(email);

        fetch(`http://localhost:5000/shoe?email=${email}`)
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[user]);


    return (
        <div className='inventory'>
            <h2 className='mt-3'>My Items : {products.length}</h2>
        </div>
    );
};

export default MyItems;
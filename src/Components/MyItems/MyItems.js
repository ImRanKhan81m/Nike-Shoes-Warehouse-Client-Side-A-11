import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(()=>{
        fetch('http://localhost:5000/shoes')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[]);


    return (
        <div className='inventory'>
            <h2 className='mt-3'>My Items : {products.length}</h2>
        </div>
    );
};

export default MyItems;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const {manageId} = useParams();
    console.log(product);


    useEffect(() => {
        const url = `http://localhost:5000/shoes/${manageId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <div>
            <h1>Update Product: {product._id}</h1>
        </div>
    );
};

export default UpdateProduct;
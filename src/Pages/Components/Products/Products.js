import React, {useState, useEffect} from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <h3 className='text-xl text-center'>Our Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <Product
                    key={product._id}
                    product = {product}
                    ></Product>)
                }
            </div>
            
        </div>
    );
};

export default Products;
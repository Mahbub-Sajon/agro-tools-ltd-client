import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useProducts();

   
    return (
        <div>
            <h3 className='text-xl text-center'>Our Products</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5'>
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
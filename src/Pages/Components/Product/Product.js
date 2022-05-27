import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {name, img, description, price, available, order} = product;
    const navigate = useNavigate();
    const navigateToPlaceOrder = id => {
        navigate(`/place-order/${id}`);

    }
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <img className='h-64 w-64 mx-auto' src={img} alt="" />
                    <h2 class="card-title">Product Name: {name}</h2>
                    <p><span className='font-bold'>Description:</span> {description}</p>
                    <p><span className='font-bold'>Product Price:</span>$ {price}</p>
                    <p><span className='font-bold'>Available Products:</span> {available}</p>
                    <p><span className='font-bold'>Minimum Order Quantity:</span>{order}</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => navigateToPlaceOrder(product._id)} class=" mx-auto btn-primary btn">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
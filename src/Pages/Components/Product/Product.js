import React from 'react';

const Product = ({product}) => {
    const {name, img, description, price, available, order} = product;
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <img src={img} alt="" />
                    <h2 class="card-title">Product Name: {name}</h2>
                    <p>Description: {description}</p>
                    <p>Product Price: $ {price}</p>
                    <p>Available Products: {available}</p>
                    <p>Minimum Order Quantity: {order}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
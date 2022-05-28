import React from 'react';

const MyOrder = ({myOrder}) => {
    
    return (
        <div>
            <h2>Product Name: {myOrder.product}</h2>
            <p>Ordered Quantity: {myOrder.orderQuantity}</p>
            <button className='btn btn-primary'>Payment</button>
        </div>
    );
};

export default MyOrder;
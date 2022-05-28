import React from 'react';

const MyOrder = ({myOrder}) => {
    
    return (
        <div>
            <h2>Product Name: {myOrder.product}</h2>
            <p>Ordered Quantity: {myOrder.orderQuantity}</p>
            <p>Per Unit Price: {myOrder.price}</p>
            <p>Total Payable Price: {myOrder.price}</p>
        </div>
    );
};

export default MyOrder;
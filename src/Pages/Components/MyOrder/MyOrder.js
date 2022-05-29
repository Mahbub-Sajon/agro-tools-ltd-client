// import React from 'react';

// const MyOrder = ({myOrder}) => {
//     const handleOrderCancel = id => {
//         const proceed = window.confirm('Are you sure you want to cancel?')
//         if(proceed){

//             console.log('deleting', id);
//             const url = `http://localhost:5000/ordered-products/${id}`;
//             fetch(url, {
//                 method: 'DELETE'
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log('deleted')
//                 // if(data.deletedCount > 0){
//                 //     console.log('deleted');
//                 //     const remaining = myOrder.filter()
//                 // }
//             })

//         }
//     }
    
//     return (
//         <div>
//             <h2>Product Name: {myOrder.product}</h2>
//             <p>Ordered Quantity: {myOrder.orderQuantity}</p>

//            <div className='flex'>
//            <button className='btn btn-primary mr-5'>Payment</button>
//            <button onClick={ ()=> handleOrderCancel(myOrder._id)} className='btn btn-primary'>Cancel</button>
//            </div>
//         </div>
//     );
// };

// export default MyOrder;
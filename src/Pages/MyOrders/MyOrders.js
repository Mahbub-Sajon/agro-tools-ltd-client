import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://sheltered-basin-70963.herokuapp.com/ordered-products?email=${email}`;
            const { data } = await axios.get(url);
            setMyOrders(data);

        }
        getOrders();
    }, [user]);
    const handleOrderCancel = id => {
        const proceed = window.confirm('Are you sure you want to cancel?')
        if(proceed){

            console.log('deleting', id);
            const url = `https://sheltered-basin-70963.herokuapp.com/ordered-products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log('deleted')
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = myOrders.filter(myOrder => myOrder._id !== id);
                    setMyOrders(remaining);
                }
            })

        }
    }
    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center my-5'>
            {
                myOrders.map(myOrder => <div key={myOrder._id}>
                    <h2>Product Name: {myOrder.product}</h2>
                    <h3>Email: {user.email}</h3>
                    <p>Ordered Quantity: {myOrder.orderQuantity}</p>
                    <div className='flex'>
                        <button className='btn btn-primary mr-5'>Payment</button>
                        <button onClick={() => handleOrderCancel(myOrder._id)} className='btn btn-primary'>Cancel</button>
                    </div>





                </div>)
            }
        </div>
    );
};

export default MyOrders;
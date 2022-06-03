import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import CheckoutForm from '../Components/CheckoutForm/CheckoutForm';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        if(user){
            fetch(`http://localhost:5000/ordered-products?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                console.log('res', res);
                if(res.status === 401 || res.status === 403){
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            })
            .then(data => setMyOrders(data));
        }
    }, [user]);
    const handleOrderCancel = id => {
        const proceed = window.confirm('Are you sure you want to cancel?')
        if(proceed){

            console.log('deleting', id);
            const url = `http://localhost:5000/ordered-products/${id}`;
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
                    <p>Payable Amount: $ { myOrder.totalPrice }</p>
                    <div className='flex gap-2'>
                       <div>
                      <Link className='btn btn-primary' to={`/payment/${myOrder._id}`}>Payment</Link>
                       </div>
                        <button onClick={() => handleOrderCancel(myOrder._id)} className='btn btn-primary'>Cancel</button>
                    </div>

                        

                       

                </div>)
            }
           
        </div>
    );
};

export default MyOrders;
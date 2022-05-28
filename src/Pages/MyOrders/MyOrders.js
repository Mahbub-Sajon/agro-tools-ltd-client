import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyOrder from '../Components/MyOrder/MyOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() =>{
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/ordered-products?email=${email}`;
            const {data} = await axios.get(url);
            setMyOrders(data);

        }
        getOrders();
    }, [user])
    return (
        <div>
            <h1>Your Orders: {myOrders.length}</h1>
            {
                myOrders.map(myOrder => <MyOrder
                key={myOrder._id}
                myOrder = {myOrder}
                ></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;
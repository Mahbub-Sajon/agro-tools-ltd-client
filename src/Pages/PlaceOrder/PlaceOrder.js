import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import axios from 'axios';

const PlaceOrder = () => {
    const {id} = useParams();
    const [user, loading] = useAuthState(auth);
    const [products,setProducts] = useState({});
    useEffect(() =>{
        const url = `http://localhost:5000/place-order/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            userName:user.displayName,
            email: user.email,
            product: products.name,
            productId: products._id,
            availableQuantity: products.available,
            minimumOrder: products.order,
            price: products.price,
            address: event.target.address.value,
            phone: event.target.phone.value,
            orderQuantity: event.target.quantity.value

        }

        if(order.orderQuantity>order.availableQuantity){
            return alert(`Order can not be more than available quantity! Available Quantity: ${order.availableQuantity}`)
        }
        else if(order.orderQuantity<order.minimumOrder){
            return alert(`Minimum order should be more than ${order.minimumOrder}`)
        }

        else{
            alert('Order added successfully!')
        }
        event.target.reset();


        axios.post('http://localhost:5000/order' , order)
        .then(response => {
           const {data} = response;
        })



        }



        if(loading){
            return <Loading></Loading>
        }


    return (
        <div>
           <h2 className='text-center'>Product Name: {products.name}</h2>
           <h2 className='text-center'>Available Quantity: {products.available}</h2>
           <h2 className='text-center'>Minimum Order Quantity: {products.order}</h2>
           <h2 className='text-center'>Per Unit Price: $ {products.price}</h2>
           <img className='w-1/6 mx-auto' src={products.img} alt="" />

           <form onSubmit={handlePlaceOrder} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-1/3 mx-auto gap-4 ' action="">
               <input type="text" name='name' value={user?.displayName} disabled required />
               <input type="email" name='email' value={user?.email} disabled  required />
               <input className='border-2' type="address" name='address' placeholder='Your Address' required />
               <input className='border-2' type="number" name='phone' placeholder='Your Contact Number' required />
               <input className='border-2' type="number" name='quantity' placeholder='Quantity you want to buy' required />

               <input className=' btn-primary text-white rounded-md h-12 cursor-pointer hover: ' type="submit" value='Place Order' />

           </form>
        </div>
    );
};

export default PlaceOrder;
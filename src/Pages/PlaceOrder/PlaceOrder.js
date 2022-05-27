import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlaceOrder = () => {
    const {id} = useParams();
    const [products,setProducts] = useState({});
    useEffect(() =>{
        const url = `http://localhost:5000/place-order/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return (
        <div>
           <h2 className='text-center'>Name: {products.name}</h2>
           <h2 className='text-center'>Name: {products.available}</h2>
           <h2 className='text-center'>Name: {products.order}</h2>
           <img className='w-1/6 mx-auto' src={products.img} alt="" />

           <form className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-1/4 mx-auto' action="">
               <input type="text" name='name' placeholder='name' required />
               <input type="text" name='name' placeholder='name' required />
           </form>
        </div>
    );
};

export default PlaceOrder;
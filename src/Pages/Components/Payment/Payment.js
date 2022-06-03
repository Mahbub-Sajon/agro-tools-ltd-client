import React from 'react';
import {loadStripe} from '@stripe/stripe-js'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';


const stripePromise = loadStripe('pk_test_51L6WxdEdgsIsqW9Cc7nRYqM0LSEIN6RTFXHhiNZGsjVNCZ7WCgKX97hpr7PxPGKrwtVppkzsQy6iWoHSelAA1oFB00MyYy7teB');
const Payment = () => {
    const { id } = useParams();
    const url = `https://sheltered-basin-70963.herokuapp.com/order/${id}`;
    const { data: payment, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            
                    <div class="card w-50 max-w-md my-12 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p className='text-primary text-xl font-bold' >Hello Dear, {payment.userName}</p>
                            <h2 class="card-title">Pay For {payment.product}</h2>
                            <p>Total payable amount: $ {payment.totalPrice}</p>
                            <p>Thank You For Trusting Us!</p>
                            
                            <div className="card-body">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm></CheckoutForm>
                                </Elements>
                                </div>
                        </div>
                    </div>
                   
                </div>
          
    );
};

export default Payment;
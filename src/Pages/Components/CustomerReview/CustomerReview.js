import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            const url = "https://sheltered-basin-70963.herokuapp.com/review";
            const {data} = await axios.get(url);
            setReviews(data.slice(-3));
        }
        getReviews();
    },[])
    return (
        <div>
             <h3 className='text-2xl my-5 text-primary text-center font-bold'>Customer Ratings</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5'>
            
            {
                reviews.map(review => 
                    <div 
                    key={review._id}
                    >

                    <h2>{review.user}</h2>
                    <h2>{review.email}</h2>
                    <h2>{review.textReview}</h2>
                    <h2>{review.starReview}</h2>

                    </div>
                    )
            }
        </div>
        </div>
    );
};

export default CustomerReview;
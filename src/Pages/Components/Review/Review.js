import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import axios from 'axios';


const Review = () => {
    const {id} = useParams();
    const [user, loading] = useAuthState(auth);
    const [reviews,setReviews] = useState({});

    const handleReview = event =>{
        event.preventDefault();
        const review ={
            user: user.displayName,
            email:user.email,
            textReview: event.target.review.value,
            startReview: event.target.rating.value
        }
        axios.post('https://sheltered-basin-70963.herokuapp.com/review' , review)
        .then(response => {
           const {data} = response;
        });
        event.target.reset();
        alert('Review Added!')
    }
    return (

        <div>
            <h2>Please add a review:</h2>

            <form className='my-auto' onSubmit={handleReview}>
                <input className=' border-2 w-96 h-48 border-black' type="text" placeholder='Write a review here' name='review' />
                <br />
                <h2 className='text-center mt-5'>Ratings:</h2>
                <div className="rating rating-lg rating-half ml-20">
                 
                
                    <input type="radio" name="rating" class="rating-hidden" />
                    <input type="radio" name="rating" class="bg-yellow-900 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating" class="bg-yellow-900 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating" class="bg-yellow-900 mask mask-star-2 mask-half-1" checked />
                    <input type="radio" name="rating" class="bg-yellow-900 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating" class="bg-yellow-900 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating" class="bg-yellow-900 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating" class="bg-yellow-900 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating" class="bg-yellow-900 mask mask-star-2 mask-half-2" />
                    <input type="radio" name="rating" class="bg-yellow-900 mask mask-star-2 mask-half-1" />
                    <input type="radio" name="rating" class="bg-yellow-900 mask mask-star-2 mask-half-2" />
                </div>
                <br />
                <input className='grid my-2 mx-auto btn btn-primary ' type="submit" value='Add Review' />
            </form>
        </div>
    );
};

export default Review;
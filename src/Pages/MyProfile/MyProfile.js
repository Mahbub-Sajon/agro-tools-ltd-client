import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>Email: {user.email} </h1>
            <form action="">
  
            <input type="text" name='name' placeholder='Name' />

            <input type="email" name='email' placeholder='Email'/>

            <input className='btn btn-primary' type="submit" value="update" />

            </form>
        </div>
    );
};

export default MyProfile;
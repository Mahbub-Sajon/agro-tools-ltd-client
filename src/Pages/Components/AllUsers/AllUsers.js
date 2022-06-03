import React from 'react';
import {useQuery} from 'react-query'
import Loading from '../../Shared/Loading/Loading';
import UserRow from '../UserRow/UserRow';

const AllUsers = () => {
   const {data: users, isLoading} = useQuery('users', () => fetch('https://sheltered-basin-70963.herokuapp.com/all-users', {
       method: 'GET',
       headers:{
           authorization: `Bearer ${localStorage.getItem('accessToken')}`
       }
   }).then(res=>res.json()));
   if(isLoading){
       return <Loading></Loading>
   }
 
    return (
        <div>
            <h2 className='text-2xl'>All Users: {users.length} </h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map(user => <UserRow
            key={user._id}
            user={user}
            ></UserRow>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;
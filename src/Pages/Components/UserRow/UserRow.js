import React from 'react';

const UserRow = ({ user }) => {
    const { email, role } = user;
    const makeAdmin =() => {
        fetch(`https://agro-tools-ltd-server.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                alert('Failed to make an admin!')
            }
           return  res.json()
        })
        .then(data => {
           if(data.modifiedCount > 0){
            alert('Admin making successful!')
           }
        })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role!=='admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}
            </td>
            <td>Blue</td>
        </tr>
    );
};

export default UserRow;
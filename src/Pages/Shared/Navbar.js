import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const menuItems = <>

        <li><Link to="/">HOME</Link></li>
        <li><Link to="/my-order">MY ORDER</Link></li>
        <li>{ user? <button onClick={logout} className='btn btn-ghost'> Log Out</button> :  <Link to="/login">LOGIN</Link>}</li>
        {
            user && <li><Link to='/dashboard'>DASHBOARD</Link></li>
        }
        <li><Link to="/signup">SIGN UP</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/my-portfolio">MY PORTFOLIO</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-primary text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link 
                     to="/" className="btn btn-ghost normal-case text-xl">Agro Tools Ltd</Link>
                </div>
                <div className="navbar-center hidden md:flex  lg:flex">
                    <ul className="menu menu-horizontal p-0 w-full">
                        {menuItems}
                    </ul>
                </div>
                <div className='navbar-end'>
                <label tabindex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
               

                </div>
            </div>
        </div>
    );
};

export default Navbar;
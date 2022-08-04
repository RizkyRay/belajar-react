import React from 'react'
import '../index.css';
import logo from '../logo.svg';

const Nav = () => (
    <nav className='navbar' >
        <div className='logo' >
            <img src={logo} alt="Logo" className='App-logo' />
            <span > React </span>
        </div >
        <div >
            <ul>
                <li><a href="#" >Home</a></li>
                <li><a href="#" >Contact</a></li>
                <li><a href="#" >About</a></li>
            </ul>
        </div >
    </nav>
);

export default Nav;
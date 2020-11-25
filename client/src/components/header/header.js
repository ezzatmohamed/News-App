import React, {Component} from 'react';
import './header.css'
import {Redirect } from 'react-router-dom'
import axios from 'axios'

// import {Link} from 'react-router-dom'
// import {Router,Redirect } from 'react-router-dom'
const Header = () => {


    const logout = (e)=>{
        e.preventDefault();
    }


    return (
        <div  className = 'header'>
                <div className = 'header-bar' >   
                <div className="nav-menu">
                    <ul>
                        <li><a  href='/favorites'>My Favorites</a></li>
                        <li><a href='/headlines'>All News</a></li>
                        <li><a href='/logout' onClick={logout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
}

export default Header
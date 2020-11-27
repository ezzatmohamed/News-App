import React, {Component} from 'react';
import './header.css'
import {Redirect } from 'react-router-dom'
import axios from 'axios'
import api from './../../api'

import {displayMsg} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'

const Header = () => {

    const dispatch = useDispatch()

    const logout = (e) => {
        e.preventDefault();

      api.get('api/logout')
      .then(  (res) => {
          const message = res.data && res.data.message ? res.data.message : "";
          localStorage.setItem('token','')
          localStorage.clear() 
          dispatch(displayMsg(true,message))
        })
        .catch( (err) => {
            const message = err.response &&err.response.data && err.response.data.message ? err.response.data.message : "";
            dispatch(displayMsg(false,message))
        });

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
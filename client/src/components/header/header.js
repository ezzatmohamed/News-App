import React, {useState,useEffect} from 'react'
import './header.css'
import api from './../../api'
import {displayMsg,LogOut} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'


const Header = (props) => {

    const dispatch = useDispatch()
    const [redirect, setRedirect] = useState(false)
    const loggedin = useSelector(state=> state.authReducer)
 
    
    const logout = (e) => {
        e.preventDefault();

      api().get('api/logout')
      .then(  (res) => {
          const message = res.data && res.data.message ? res.data.message : "";
          localStorage.setItem('token','')
          localStorage.clear() 
          dispatch(displayMsg(true,message))
          dispatch(LogOut)
          props.history.push('/login')

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
                    
                        {loggedin.logged? 
                                    <ul>
                                        <li><a  href='/favorites'>My Favorites</a></li>
                                        <li><a href='/headlines'>All News</a></li>
                                        <li><a href='/logout' onClick={logout}>Logout</a></li>
                                    </ul> 
                                    
                        : 
                            <ul>
                                <li><a  href='/login'>Login</a></li>
                                <li><a href='/signup'>Signup</a></li>
                            </ul>
                            
                        }
                   
                </div>
            </div>
        </div>
    )
    
}

export default Header
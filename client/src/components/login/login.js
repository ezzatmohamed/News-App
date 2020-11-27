import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'
import {Redirect } from 'react-router-dom'
import {displayMsg} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'

const Login = ()=> {
    
    const [ credentials, setCredentials]  = useState({email:"",password:""})
    const dispatch = useDispatch()

    const onSubmit = (e)=>{
        e.preventDefault()
        api.post('api/login',credentials)
            .then(res=>{
                const message = res.data && res.data.message ? res.data.message : "";
                localStorage.setItem('token',res.data.token)
                dispatch(displayMsg(true,message))
            })
            .catch(err=>{
                const message = err.response.data && err.response.data.message ? err.response.data.message : "";
                dispatch(displayMsg(false,message))
            })
    }


    return (
        <div>
            <div className="form-container">
                <p id="form-title">Login form</p>
                <form onSubmit={onSubmit}>
                    <div className="form-input">
                        <input  type = "email" 
                                name="email" 
                                value={credentials.email}
                                placeholder="Email" 
                                onChange={ (e)=> setCredentials({...credentials,email:e.target.value}) }
                                required
                    />
                    </div>
                    <div className="form-input">
                        <input  type = "password" 
                                name=  "password" 
                                value={credentials.password}
                                placeholder="Password" 
                                onChange={ (e)=> setCredentials({...credentials,password:e.target.value}) }
                                required
                        />
                    </div>
                    <div id="link">
                    <a href="/signup">OR Register</a>
                    </div>
                        <button className="form-button" type="submit" >Login</button>
                
                </form>
            </div>
            {response.display ? <Message success={response.success} message={response.message} ></Message> : ""}
        </div>
    )
}

export default Login
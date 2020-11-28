import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'
import {withRouter } from 'react-router-dom'
import {displayMsg,LogIn} from './../../redux'
import {useDispatch} from 'react-redux'

const Login = (props)=> {
    
    const [ credentials, setCredentials]  = useState({email:"",password:""})
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()
        setLoading(true)


        api().post('login',credentials)
            .then(res=>{
                const message = res.data && res.data.message ? res.data.message : "";
                localStorage.setItem('token',res.data.token)
                dispatch(displayMsg(true,message))
                setLoading(false)
                dispatch(LogIn())
                props.history.push('/')
            })
            .catch(err=>{
                const message = "invalid login"
                dispatch(displayMsg(false,message))
                setLoading(false)
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
                        <button disabled={loading} className="form-button" type="submit" >Login</button>
                    
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login)
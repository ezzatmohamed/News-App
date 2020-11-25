import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'
const Login = ()=> {
    
    const [ credentials, setCredentials]  = useState({email:"",password:""})

    const onSubmit = (e)=>{
        e.preventDefault()

    }
    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>
                <p id="form-title">Login</p>
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
                <div className="form-button">
                    <button type="submit" >Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
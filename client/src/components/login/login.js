import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'
import Message from './../message/message'
const Login = ()=> {
    
    const [ credentials, setCredentials]  = useState({email:"",password:""})
    const [ response,setResponse ] = useState({display:false,message:"",success:false})


    const onSubmit = (e)=>{
        e.preventDefault()
        api.post('api/login',credentials)
            .then(res=>{
                const message = res.data && res.data.message ? res.data.message : "";
                setResponse({...response,display:true,message,success:true})
                setTimeout( ()=>{ setResponse({...response,display:false,message:message,success:false})}, 2500);
                localStorage.setItem('token',res.data.token)
            })
            .catch(err=>{
                const message = err.response.data && err.response.data.message ? err.response.data.message : "";
                setResponse({...response,display:true,message:message,success:false})
                setTimeout( function(){ setResponse({...response,display:false,message:message,success:false})}, 2500);
             
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
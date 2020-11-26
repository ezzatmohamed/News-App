import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'
import Message from './../message/message'
const Signup = ()=> {
    
    const [ credentials, setCredentials]  = useState({email:"",name:"",date_of_birth:""})
    const [ response,setResponse ] = useState({display:false,message:"",success:false})

    const onSubmit = (e)=>{
        e.preventDefault()
        api.post('/api/signup',credentials)
            .then(res=>{
                const message = res.data && res.data.message ? res.data.message : "";
                setResponse({...response,display:true,message,success:true})
                setTimeout( ()=>{ setResponse({...response,display:false,message:message,success:false})}, 2500);
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
                <form onSubmit={onSubmit}>
                    <p id="form-title">Signup Form</p>
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
                        <input  type = "text"   
                                name="name" 
                                value={credentials.name}
                                placeholder="Name" 
                                onChange={ (e)=> setCredentials({...credentials,name:e.target.value}) }
                                required
                        />
                    </div>
                    <div className="form-input">
                        <p id ="BOD">Date of Birth</p>
                        <input  type = "date" 
                                name="date_of_birth" 
                                value={credentials.date_of_birth} 
                                onChange={ (e)=> setCredentials({...credentials,date_of_birth:e.target.value}) }
                                required
                        />
                    </div>

                    <div id="link">
                        <a href="/login">OR Login</a>
                    </div>
                    <button className="form-button" type="submit" >Signup</button>
                </form>
                
            </div>    
            {response.display ? <Message success={response.success} message={response.message} ></Message> : ""}
            
        </div>
    )
}

export default Signup
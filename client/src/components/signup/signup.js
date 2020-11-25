import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'

const Signup = ()=> {
    
    const [ credentials, setCredentials]  = useState({email:"",name:"",date:""})

    const onSubmit = (e)=>{
        e.preventDefault()
        console.log(credentials)
    }
    return (
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
                    <p id ="BOD">Birth of date</p>
                    <input  type = "date" 
                            name="date" 
                            value={credentials.date}
                            onChange={ (e)=> setCredentials({...credentials,date:e.target.value}) }
                            required
                    />
                </div>

                <div id="link">
                    <a href="/login">OR Login</a>
                </div>
                <button className="form-button" type="submit" >Signup</button>
            </form>
        </div>
    )
}

export default Signup
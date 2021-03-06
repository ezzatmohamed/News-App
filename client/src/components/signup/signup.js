import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'
import {displayMsg} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'

const Signup = ()=> {
    
    const [ credentials, setCredentials]  = useState({email:"",name:"",date_of_birth:""})
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch()

    const onSubmit = (e)=>{
        e.preventDefault()
        setLoading(true)
        api().post('/signup',credentials)
            .then(res=>{
                const message = res.data && res.data.message ? res.data.message : "";
                dispatch(displayMsg(true,message))
                setLoading(false)
            })
            .catch(err=>{
                const message = err.response.data && err.response.data.message ? err.response.data.message : "";
                dispatch(displayMsg(false,message))
                setLoading(false)
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
                    <button disabled={loading} className="form-button" type="submit" >Signup</button>
                </form>
                
            </div>    
            {/* {response.display ? <Message success={response.success} message={response.message} ></Message> : ""} */}
            
        </div>
    )
}

export default Signup
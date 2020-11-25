import React ,{useState,useEffect} from 'react'
import './style.css'
// import api from './../../api'

const Headline = (props)=> {
    
    // const [ credentials, setCredentials]  = useState({email:"",name:"",date:""})
    const info = props.info
    return (
        <div className="headline-container">
            <h2>{info.title}</h2>
            <p id="headline-author">Author</p>
            <p id="headline-date">date</p>
            <p id="headline-content">content</p>
            <a id="headline-link" href="#">Link</a>
        </div>
    )
}

export default Headline
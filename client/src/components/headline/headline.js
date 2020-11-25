import React ,{useState,useEffect} from 'react'
import './style.css'
// import api from './../../api'

const Headline = (props)=> {
    
    // const [ credentials, setCredentials]  = useState({email:"",name:"",date:""})
    const info = props.info

    let button
    if(!props.FavoriteDelete){

        button = <div className = "headline-button" id="add-favorite">
                            <button>Add to favorite</button>
                        </div>
    }else{
        button =    <div className = "headline-button" id="remove-favorite">
                        <button>Remove From favorite</button>
                    </div>
    }

    return (
        <div className="headline-container">
            <div className="headline-image"></div>
                <div className="headline-text">       
                    <h2>{info.title}</h2>  
                    <p id="headline-author">william shakespear shakespear shakespear shakespear shakespear</p>
                    <p id="headline-content">n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                    <a id="headline-link" href="#">Go to Headline Link</a>

                    <p id="headline-date">12/07/1001</p>  
                </div>

            {button}
        </div>
    )
}

export default Headline
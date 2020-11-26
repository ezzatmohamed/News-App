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
                    <h2 style={ { backgroundImage: "url("+info.urlToImage+")" } }>{info.title}</h2>  
                    <p id="headline-author">{info.author} </p>
                    <p id="headline-content">{info.description}</p>
                    <a id="headline-link" href={info.url}>Go to Headline Link</a>
                    <p id="headline-date">{info.publishedAt}</p>  
                </div>

            {button}
        </div>
    )
}

export default Headline
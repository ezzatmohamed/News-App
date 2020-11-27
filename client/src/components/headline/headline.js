import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'
import {displayMsg,deleteFromFavorite} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'


const Headline = (props)=> {
    
    const info = props.info
    const dispatch = useDispatch()

    
    const RemoveFromFavorite = ()=>{
        
        api.delete(`api/favorite/${info.id}`)
            .then(res=>{
                const message = res.data && res.data.message ? res.data.message : "";
                dispatch(displayMsg(true,message))
                dispatch(deleteFromFavorite(info.id))
            })
            .catch(err=>{
                const message = err.response&&err.response.data && err.response.data.message ? err.response.data.message : "";
                dispatch(displayMsg(false,message))
            })
    }
    const AddToFavorite = ()=>{
        const data = {
            "description":`${info.description}`,
            "publishedAt":`${info.publishedAt}`,
            "title":`${info.title}`,
            "author":`${info.author}`,
            "url":`${info.url}`,
            "urlToImage":`${info.urlToImage}`
        }
        api.post('api/favorite',data)
            .then(res=>{
                const message = res.data && res.data.message ? res.data.message : "";
                dispatch(displayMsg(true,message))
            })
            .catch(err=>{
                const message = err.response.data && err.response.data.message ? err.response.data.message : "";
                dispatch(displayMsg(false,message))
            })
    }

    let button
    if(!props.FavoriteDelete){

        button = <div  onClick={AddToFavorite} className = "headline-button" id="add-favorite">
                            <button>Add to favorite</button>
                        </div>
    }else{
        button =    <div  onClick={RemoveFromFavorite} className = "headline-button" id="remove-favorite">
                        <button>Remove From favorite</button>
                    </div>
    }

    return (
        <div className="headline-container">
            <div className="headline-image"></div>
                <div className="headline-text">       
                    <div className="headline-title"style={ { backgroundImage: "url("+info.urlToImage+")" } }>
                        <p >    {info.title}</p>
                    </div>  
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
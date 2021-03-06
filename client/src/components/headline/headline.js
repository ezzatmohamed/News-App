import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'
import {displayMsg,deleteFromFavorite} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'

const Headline = (props)=> {
    
    const info = props.info
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    
    const RemoveFromFavorite = ()=>{
        setLoading(true)
        api().delete(`favorite/${info.id}`)
            .then(res=>{
                const message = res.data && res.data.message ? res.data.message : "";
                dispatch(displayMsg(true,message))
                dispatch(deleteFromFavorite(info.id))
                setLoading(false)
            })
            .catch(err=>{
                const message = err.response&&err.response.data && err.response.data.message ? err.response.data.message : "";
                dispatch(displayMsg(false,message))
                setLoading(false)
            })
    }
    const AddToFavorite = ()=>{
        setLoading(true)
        const filterInput = (input) =>{
            if(!input)
                return "not available"
            return input.substring(0,254);
        }

        const data = {
            "description":`${filterInput(info.description)}`,
            "publishedAt":`${filterInput(info.publishedAt)}`,
            "title":`${filterInput(info.title)}`,
            "author":`${filterInput(info.author)}`,
            "url":`${filterInput(info.url)}`,
            "urlToImage":`${filterInput(info.urlToImage)}`
        }
        
        api().post('favorite',data)
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

    let button
    if(!props.FavoriteDelete){

        button = <div    onClick={AddToFavorite} className = "headline-button" id="add-favorite">
                            <button disabled={loading}>Add to favorite</button>
                        </div>
    }else{
        button =    <div    onClick={RemoveFromFavorite} className = "headline-button" id="remove-favorite">
                        <button disabled={loading}>Remove From favorite</button>
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
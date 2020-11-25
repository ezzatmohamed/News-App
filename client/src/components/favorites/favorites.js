import React ,{useState,useEffect} from 'react'
import './style.css'
import {connect} from 'react-redux'
import {fetchFavorites} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'
import Headline from './../headline/headline'

const Favorites = ()=> {
    
    // const [ credentials, setCredentials]  = useState({email:"",name:"",date:""})
    const state = useSelector(state=> state.favoritesReducer)
    const dispatch = useDispatch()
    const [page,setPage] = useState(1)

    useEffect(()=>{
        dispatch(fetchFavorites())
    },[])
    return (
        <div>
            <div className="headlines-container">

                {state.loading ? <p>Loading...</p> : ''}
                {
                    state.favorites ?( state.favorites.length ? 
                        
                        state.favorites.map(favorite=>{
                        return  <Headline  info={favorite} FavoriteDelete={true}></Headline>
                        })
                        : '') : ''
                }
                {state.error ? <p>error Occured!</p> : ''}

                
            </div>
            <div className="headlines-page">
                <a href = {`/${page-1}`} id="headline-prev">
                    Prev
                </a>
                <a href = {`/${page+1}`}   id="headline-next">
                    Next
                </a>
            </div>
        </div>
    )
}

export default Favorites
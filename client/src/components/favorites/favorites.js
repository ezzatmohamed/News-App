import React ,{useState,useEffect} from 'react'
import './style.css'
import {connect} from 'react-redux'
import {fetchFavorites,displayMsg} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'
import Headline from './../headline/headline'

const Favorites = ()=> {
    
    // const [ credentials, setCredentials]  = useState({email:"",name:"",date:""})
    const state = useSelector(state=> state.favoritesReducer)
    const dispatch = useDispatch()
    const [page,setPage] = useState(1)

    useEffect(()=>{
        dispatch(fetchFavorites(page))
    },[page])
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
                {state.error ? dispatch(displayMsg(false,state.error)) : ''}
            </div>

            <div className="headlines-page">
                 {page == 1  ? '' : <button id="headline-prev"  onClick={()=>{setPage(page-1)}}>Prev</button>} 
                 {state.NextPage == -1 ? '' : <button  id="headline-next" onClick={()=>{setPage(page+1)}}>Next</button>}
            </div>

        </div>
    )
}

export default Favorites
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
                {page == 1? '' : <button id="headline-prev">Prev</button>} 
                <button  id="headline-next">
                    Next
                </button>
            </div>
            <div className="success-msg" display={false}>
                <span class="closebtn" >&times;</span>
                Headline removed Successfully from favorites
            </div>
            <div className="error-msg"  >
                <span class="closebtn">&times;</span>
                An error occured
            </div>
        </div>
    )
}

export default Favorites
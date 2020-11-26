import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'
import {connect} from 'react-redux'
import {fetchHeadlines} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'
import Headline from './../headline/headline'

const Headlines = ()=> {
    

    const [state,setState] = useState({loading:false,headlines:[],error:""})
    const [page,setPage] = useState(1)



    useEffect(()=>{
        setState({...state,loading:true})
        api.get('/todos')
        .then(res=>{
            setState({loading:false,headlines:res.data.slice(0,6),error:""})
        })
        .catch(err=>{
            setState({loading:false,headlines:[],error:err.message})
        })
    },[])
    
    return (
        <div className="contanier">
            <div className="headlines-container">

                {state.loading ? <p>Loading...</p> : ''}
                {
                    state.headlines ?( state.headlines.length ? 
                        
                        state.headlines.map(headline=>{
                        return  <Headline  info={headline} FavoriteDelete={false} ></Headline>
                        })
                        : '') : ''
                }
                {state.error ? <p>error Occured!</p> : ''}

                
            </div>
            <div className="headlines-page">
                 {page == 1 ? '' : <button id="headline-prev">Prev</button>} 
                <button  id="headline-next">
                    Next
                </button>
            </div>

            <div className="success-msg">
                <span class="closebtn" >&times;</span>
                Headline added Successfully to favorites
            </div>
            <div className="error-msg">
                <span class="closebtn">&times;</span>
                An error occured
            </div>
        </div>
    )
}

export default Headlines
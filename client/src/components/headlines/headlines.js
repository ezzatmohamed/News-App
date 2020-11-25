import React ,{useState,useEffect} from 'react'
import './style.css'
// import api from './../../api'
import {connect} from 'react-redux'
import {fetchHeadlines} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'
import Headline from './../headline/headline'

const Headlines = ()=> {
    
    // const [ credentials, setCredentials]  = useState({email:"",name:"",date:""})
    const state = useSelector(state=> state.headlinesReducer)
    const dispatch = useDispatch()
    const [page,setPage] = useState(1)

    useEffect(()=>{
        dispatch(fetchHeadlines())
    },[])
    return (
        <div>
            <div className="headlines-container">

                {state.loading ? <p>Loading...</p> : ''}
                {
                    state.headlines ?( state.headlines.length ? 
                        
                        state.headlines.map(headline=>{
                        return  <Headline  info={headline} ></Headline>
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

export default Headlines
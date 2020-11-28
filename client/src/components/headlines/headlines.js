import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'
import {connect} from 'react-redux'
import {fetchHeadlines} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'
import Headline from './../headline/headline'
import {displayMsg} from './../../redux'

const Headlines = (props)=> {
    

    const [fetch,setFetching] = useState({loading:false,headlines:[]})
    const [params,setParams] = useState({page:1,country:1,category:1})
    const [nextPage,setNextPage] = useState(2)
    const dispatch = useDispatch()

    useEffect(()=>{
        setFetching({...fetch,headlines:[],loading:true})
        // const api = require('./../../api')
        // console.log(api)
        // alert(localStorage.getItem('token'))
        api().get(`/news?page=${params.page}&country=${params.country}&category=${params.category}`)
        .then(res=>{
            let articles = res.data.data
            if(!Array.isArray(articles)){
                articles= Object.keys(articles).map((k) => articles[k])
            }
            const NextPage = res.data.next_page_url == null ? -1 : params.page+1
         
            setFetching({...fetch,loading:false,headlines:articles})
            setNextPage(NextPage)

        })
        .catch(err=>{
            setFetching({...fetch,loading:false,headlines:[]})

            const message = err.response.data && err.response.data.message ? err.response.data.message : "";
            dispatch(displayMsg(false,message))
        })
    },[params.page,params.country,params.category])
    
    return (
        <div className="contanier">
            <div className="custom-dropdown big" >
                <select value={params.country} onChange={(e)=>{setParams({...params,page:1,country:e.target.value})}}>
                    <option value="1">Egypt</option>
                    <option value="2">UAE</option>
                </select>
            </div>
            <div className="custom-dropdown big" >
                <select value={params.category} onChange={(e)=>{setParams({...params,page:1,category:e.target.value})}}>
                    <option value="1">Business</option>
                    <option value="2">Sports</option>
                </select>
            </div>
            <div className="headlines-container">
     
                
                {fetch.loading ? <div class="loader"></div> : ''}
                {
                    fetch.headlines && fetch.headlines.length? fetch.headlines.map(headline=>{
                        return  <Headline  info={headline} FavoriteDelete={false} ></Headline>
                        }):''
                        
                }
            </div>
            <div className="headlines-page">
                 {params.page == 1  ? '' : <button id="headline-prev"  onClick={()=>{setParams({...params,page:params.page-1})}}>Prev</button>} 
                 {nextPage == -1 ? '' : <button  id="headline-next" onClick={()=>{setParams({...params,page:params.page+1})}}>Next</button>}
            </div>

        </div>
    )
}

export default Headlines
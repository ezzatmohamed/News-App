import React ,{useState,useEffect} from 'react'
import './style.css'
import api from './../../api'
import {connect} from 'react-redux'
import {fetchHeadlines} from './../../redux'
import {useSelector, useDispatch} from 'react-redux'
import Headline from './../headline/headline'

const Headlines = (props)=> {
    

    const [fetch,setFetching] = useState({loading:false,headlines:[],error:""})
    // const [page,setPage] = useState(1)
    const [params,setParams] = useState({page:1,country:1,category:1})
    const [nextPage,setNextPage] = useState(2)
    // const [country,setCountry] = useState(1)

    useEffect(()=>{
        setFetching({...fetch,headlines:[],loading:true})
        api.get(`api/news?page=${params.page}&country=${params.country}&category=${params.category}`)
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
            setFetching({...fetch,loading:false,headlines:[],error:err.message})
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
     
                
                {fetch.loading ? <p>Loading...</p> : ''}
                {
                    
                        
                    fetch.headlines && fetch.headlines.length? fetch.headlines.map(headline=>{
                        return  <Headline  info={headline} FavoriteDelete={false} ></Headline>
                        }):''
                        
                }
                {fetch.error != ""? <p>An Error Occured refresh the page!</p> : ''}

                
            </div>
            <div className="headlines-page">
                 {params.page == 1 ? '' : <button id="headline-prev"  onClick={()=>{setParams({...params,page:params.page-1})}}>Prev</button>} 
                 {nextPage == -1 ? '' : <button  id="headline-next" onClick={()=>{setParams({...params,page:params.page+1})}}>Next</button>}
            </div>

        </div>
    )
}

export default Headlines
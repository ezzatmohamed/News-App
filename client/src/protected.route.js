import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'


export const AuthRoute =  ({component:Component,...rest})=>{
    const Islogged = useSelector(state=>state.authReducer.logged)
    return(
        <Route {...rest} 
        render={props=>{
            if(Islogged)
            {
                return <Component {...props}/>
            }
            return <Redirect to='/login'/>
        }

        } />
    )
}

export const NotAuthRoute=  ({component:Component,...rest})=>{
    const Islogged = useSelector(state=>state.authReducer.logged)
    return(
        <Route {...rest} 
        render={props=>{
            if(!Islogged)
            {
                return <Component {...props}/>
            }
            return <Redirect to='/'/>
        }

        } />
    )
}
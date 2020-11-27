import React ,{useState,useEffect} from 'react'
import './style.css'
import {displayMsg} from './../../redux'

import {useSelector, useDispatch} from 'react-redux'

const Message = (props)=>{

    const MsgState = useSelector(state=>state.messageReducer)


    return(
        MsgState.display ?
        <div className={MsgState.success ? "success-msg" : "error-msg" }>
                <span className="closebtn" >&times;</span>
                {MsgState.msg}
        </div> : ""
    )
}

export default Message
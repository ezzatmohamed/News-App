import React ,{useState,useEffect} from 'react'
import './style.css'

const Message = (props)=>{


    return(
        <div className={props.success ? "success-msg" : "error-msg" }>
                <span className="closebtn" >&times;</span>
                {props.message}
        </div>
    )
}

export default Message
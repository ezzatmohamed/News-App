import {LOGIN,
        LOGOUT
        } from './authTypes'


export const LogIn= ()=>{
    return {
            type:LOGIN,
    }
}
export const LogOut= ()=>{
    return {
            type:LOGOUT
    }
}


const axios = require( 'axios')

const URL = 'http://localhost:8000'
const HEADERS = {}



const api = () =>{

    if(localStorage.getItem('token'))
      HEADERS.Authorization = `Bearer ${localStorage.getItem('token')}`
      
    const API = axios.create({
      baseURL: URL,
      headers: HEADERS
    })
    

    API.interceptors.response.use(function (response) {
      //success
      return response;
    }, function (error) {
      if(error.response.status == 401){
          localStorage.removeItem('token')
          localStorage.clear()
          window.location= "/login"
      }
      return Promise.reject(error);
    });
    return API

}


export default api



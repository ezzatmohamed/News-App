const axios = require( 'axios')

const URL = 'http://localhost:8000'
const HEADERS = {}

if(localStorage.getItem('token')){
    HEADERS.Authorization = `Bearer ${localStorage.getItem('token')}`
}

const api = axios.create({
    baseURL: URL,
    headers: HEADERS
})

api.interceptors.response.use(function (response) {
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
export default api

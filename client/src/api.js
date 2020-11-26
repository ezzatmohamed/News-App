const axios = require( 'axios')

const URL = 'https://jsonplaceholder.typicode.com'
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
    if(error.resonse.status == 401){
        localStorage.removeItem('token')
        localStorage.clear()
        window.location= "/"
    }
    return Promise.reject(error);
  });
export default api

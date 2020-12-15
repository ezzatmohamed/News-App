const mutations = {

  
    changeInfo(state,payload){
        
        if(payload && payload.name && typeof payload.value !== 'undefined')
        {
            state.info[payload.name] = payload.value;
        }
    },

    clearInfo(state){

        state.info = {
            title:"",
            author:"",
            description:"",
            urlToImage:"",
            publishedAt:"",
            url:"",
            user:0
        }

    },
    changeError(state,payload)
    {
        state.errors[payload.name] = payload.value
    }

    
}

export default mutations
const state = () => ({

    usersList:[],
    info:{
        title:"", 
        author:"",
        description:"",
        urlToImage:"",
        publishedAt:"",
        url:"",
        user:0
    },
    errors:{
        url:'',
        urlToImage:''
    }
    
})

export default state
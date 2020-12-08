<template>

    <div>
            <div class="form-container">
                <p id="form-title">{{title}}</p>
                <form v-on:submit.prevent="onSubmit" >
                    <form-input type="text" name="title"        :value="info.title"     :handleChange="handleChange"  /> 
                    <form-input type="text" name="author"       :value="info.author"     :handleChange="handleChange" /> 
                    <form-input type="text" name="description"  :value="info.description"    :handleChange="handleChange" /> 
                    <form-input type="text" name="urlToImage"   :value="info.urlToImage"    :handleChange="handleChange" /> 
                    <form-input type="text" name="url"          :value="info.url"    :handleChange="handleChange2" /> 

                    <form-input type="date" name="publishedAt" title="Publish Date" :value="info.publishedAt"  :handleChange="handleChange" /> 

                    <select-input name="user" :options="users" :value="info.user"  :handleChange="handleChange" />

                    <button-input type="submit"  text="Create" />
                </form>
            </div>
        </div>
        
</template>


<script>
import buttonInput from './buttonInput/buttonInput'
import formInput from './formInput/formInput'
import selectInput from './selectInput/selectInput'
import { parseNovaApi } from './../../helpers/parseNovaApi.js'
import './form.css'

    export default {
        components: { formInput ,buttonInput,selectInput},
        name: "form",
        props:{
            title:{
                type:String,
                default:"Form"
            }
        },
        data(){
            return{
                info:{
                title:"",
                author:"",
                description:"",
                urlToImage:"",
                publishedAt:"",
                url:"",
                user:0
            },
                users:[]
            }
        },
        methods:{
            onSubmit(){
                Nova.request()
                    .post('/nova-api/favorites',this.info)
                    .then(res=>{
                        Nova.success('Created successfully')
                        this.info = {
                                        title:"",
                                        author:"",
                                        description:"",
                                        urlToImage:"",
                                        publishedAt:"",
                                        url:"",
                                        user:0
                                    }
                    })
                    .catch(err=>{
                        Nova.error(`Error: ${err.message}`)
                    })
            }
            ,
            handleChange(payload) {
                this.info[payload.name] = payload.value;
            }
        },
        created: function(){

            Nova.request()
            .get('/nova-api/users')
            .then(res=>{
                const users = parseNovaApi(res)
                let options = []

                if(users && users.length){
                    
                    users.forEach(user => {

                        let data = {value:-1,key:""}
                        user.forEach(item=>{
                            
                            if(item.attribute == "id")
                                data.value = item.value
                            else if (item.attribute == "name")
                                data.key = item.value
                        })
                        options.push(data)
                    })
                    this.users=options
                }
            })
            .catch(err=>{
                Nova.error("Error Retrieving users")
            })
        }


    }
</script>

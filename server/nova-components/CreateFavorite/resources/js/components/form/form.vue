<template>

    <div>
            <div class="form-container">
                <p class = "form-title">{{title}}</p>
                <form v-on:submit.prevent="onSubmit" >
                    <form-input type="text" name="title"       :req="true"     title="Title" :value="info.title"     :handleChange="handleChange"  /> 
                    <form-input type="text" name="url"         :req="true"   title="URL" :value="info.url"    :handleChange="handleChange" /> 
                    <select-input name="user" :options="users" :req="true"  :value="info.user"  :handleChange="handleChange" />

                    <form-input type="text" name="author"      title="Author" :value="info.author"     :handleChange="handleChange" /> 
                    <form-input type="text" name="description" title="Description" :value="info.description"    :handleChange="handleChange" /> 
                    <form-input type="text" name="urlToImage"  title="Image" :value="info.urlToImage"    :handleChange="handleChange" /> 

                    <form-input type="date" name="publishedAt" title="Publish Date" :value="info.publishedAt"  :handleChange="handleChange" /> 
              
                    <button-input :disabled="canSubmit" type="submit"  text="Create" />
                </form>
            </div>
        </div>
        
</template>


<script>
import {buttonInput,formInput,selectInput} from './inputs/index.js'
import { parseNovaApi } from './../../helpers/index.js'
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
        computed: {
            canSubmit: function(){
                return !(this.info.url.length > 1 && this.info.user > 0 && this.info.title.length > 1 )
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
                if(payload && payload.name && payload.value)
                    this.info[payload.name] = payload.value;
            },            
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

                            if(item && item.attribute && item.attribute == "id")
                                data.value = item.value ? item.value : -1
                            else if (item && item.attribute && item.attribute == "name")
                                data.key = item.value ? item.value : ""
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

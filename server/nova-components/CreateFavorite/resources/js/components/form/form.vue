<template>

    <div>
            <div class="form-container">
                <div class="error-box" v-if="error!=''">Error : {{error}}</div>
                <p class = "form-title">{{title}}</p>
                <form v-on:submit.prevent="validateForm" >
                    <form-input type="text" name="url"         :req="true"   title="URL" :value="info.url"    :handleChange="handleChange" /> 
                    <select-input name="user" :options="users" :req="true"  :value="info.user"  :handleChange="handleChange" />
                    <form-input type="text" name="title"           title="Title" :value="info.title"     :handleChange="handleChange"  /> 
                    
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
                users:[],
                error:''
            }
        },
        computed: {
            canSubmit: function(){
                return !(this.info.url.length && this.info.user  )
            }
        },
        methods:{
            validateForm(){
                if( !this.validateUrl(this.info.url) )
                {   
                    this.error = 'Invalid Url'
                    return
                }
                else if( this.info.urlToImage && !this.validateUrl(this.info.urlToImage) ){

                    this.error = 'Invalid Image Url'
                    return
                }

                this.error = ''
                this.onSubmit()
            },
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
                if(payload && payload.name && typeof payload.value !== 'undefined')
                {
                    this.info[payload.name] = payload.value;
                }
            },     
            validateUrl(value) {
                return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
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

                            if( item && item.attribute && item.attribute == "id")
                                data.value = item.value ? item.value : -1
                            else if ( item && item.attribute && item.attribute == "name")
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

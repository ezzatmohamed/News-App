<template>

    <div>
            <div class="form-container">
                <div class="error-box" v-if="error!=''">Error : {{error}}</div>
                <p class = "form-title">{{title}}</p>
                <form v-on:submit.prevent="validateForm" >
                    <form-input type="text" name="url"         :required="true"   title="URL" :value="info.url"    :handleChange="handleChange" /> 
                    <select-input name="user" :options="users"  :required="true"  :value="info.user"  :handleChange="handleChange" />
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
import {buttonInput,formInput,selectInput} from './../inputs/'
import { parseNovaApi,validateUrl } from './../../helpers'
import './form.css'

    export default {
        components: { formInput ,buttonInput,selectInput},
        name: "form",
        props:{
            title:{
                type:String,
                default:""
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
            canSubmit(){
                return !( this.info.url && this.info.url.length && this.info.user )
            }
        },
        methods:{
            validateForm(){
                if( !validateUrl(this.info.url) )
                {   
                    this.error = 'Invalid Url'
                    return
                }
                else if( this.info.urlToImage && !validateUrl(this.info.urlToImage) ){

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
          

        },
        created(){

            Nova.request()
            .get('/nova-api/users')
            .then(res=>{
                this.users = parseNovaApi(res,["id","name"])

            })
            .catch(err=>{
                Nova.error(err)
            })
        }


    }
</script>

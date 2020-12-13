<template>

    <div>
            <div class="form-container">
                <p class = "form-title">{{title}}</p>
                <form v-on:submit.prevent="onSubmit" >
                    <form-input type="text" name="url"          :errorMessage="errors.url" :required="true"     title="URL" :value="info.url"    :handleChange="handleChange" /> 
                    <select-input name="user" :options="users"  :required="true"  :value="info.user" optionKey="name" optionValue="id"  :handleChange="handleChange" />
                    <form-input type="text" name="title"           title="Title" :value="info.title"     :handleChange="handleChange"  /> 
                    
                    <form-input type="text" name="author"      title="Author" :value="info.author"     :handleChange="handleChange" /> 
                    <form-input type="text" name="description" title="Description" :value="info.description"    :handleChange="handleChange" /> 
                    <form-input type="text" name="urlToImage"  :errorMessage="errors.urlToImage" title="Image" :value="info.urlToImage"    :handleChange="handleChange" /> 

                    <form-input type="date" name="publishedAt" title="Publish Date" :value="info.publishedAt"  :handleChange="handleChange" /> 
                    <button-input :disabled="canSubmit" type="submit"  text="Create" />
                </form>
            </div>
        </div>
        
</template>


<script>
import {buttonInput,formInput,selectInput} from './../../inputs/'
import { parseNovaApi,validateUrl } from './../../../helpers/'
import './favoriteForm.css'

    export default {
        components: { formInput ,buttonInput,selectInput},
        name: "favorite-form",
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
                errors:{
                    url:'',
                    urlToImage:''
                }
            }
        },
        computed: {
            canSubmit(){
                return !( this.validateForm() && this.info && this.info.url && this.info.url.length && this.info.user  )
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
            },
            validateForm(){
                if(this.errors  && this.info)
                {
                    this.errors.url        =   this.info.url && !validateUrl(this.info.url) ?  'Invalid Url' : ''
                    this.errors.urlToImage =   this.info.urlToImage && !validateUrl(this.info.urlToImage) ? 'Invalid Image Url' : ''
                    return !this.errors.url && !this.errors.urlToImage
                }
                return true
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

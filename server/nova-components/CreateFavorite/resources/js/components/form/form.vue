<template>

    <div>
            <div class="form-container">
                <p id="form-title">{{title}}</p>
                <form v-on:submit.prevent="onSubmit" >
                    
                    <formInput type="text" name="title"        :value="info.title"     :handleChange="handleChange"  /> 
                    <formInput type="text" name="author"       :value="info.author"     :handleChange="handleChange" /> 
                    <formInput type="text" name="description"  :value="info.description"    :handleChange="handleChange" /> 
                    <formInput type="text" name="urlToImage"   :value="info.urlToImage"    :handleChange="handleChange" /> 
                    <formInput type="text" name="url"          :value="info.url"    :handleChange="handleChange" /> 

                    <formInput type="date" name="publishedAt" title="Publish Date" :value="info.publishedAt"  :handleChange="handleChange" /> 

                    <selectInput name="user" :options="users" :value="info.user"  :handleChange="handleChange" />

                    <buttonInput type="submit"  text="Create" />
                </form>
            </div>
        </div>
        
</template>


<script>
import buttonInput from './buttonInput/buttonInput'
import formInput from './formInput/formInput'
import selectInput from './selectInput/selectInput'
import { retrieveUsers } from './../../helpers/retrieveUsers.js'
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
                        console.log(this.info)
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
            retrieveUsers(Nova)
            .then(res=>{
                this.users=res
            })
            .catch(err=>{
                
                Nova.error("Error Retrieving users")
            })
        }


    }
</script>

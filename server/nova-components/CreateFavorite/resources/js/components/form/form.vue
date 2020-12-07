<template>

    <div>
            <div class="form-container">
                <p id="form-title">{{title}}</p>
                <form v-on:submit.prevent="onSubmit" >
                    
                    <formInput type="text" name="title"         :handleChange="handleChange"  /> 
                    <formInput type="text" name="author"        :handleChange="handleChange" /> 
                    <formInput type="text" name="description"   :handleChange="handleChange" /> 
                    <formInput type="text" name="urlToImage"    :handleChange="handleChange" /> 
                    <formInput type="text" name="url"           :handleChange="handleChange" /> 

                    <formInput type="date" name="publishedAt" title="Publish Date" :handleChange="handleChange" /> 

                    <selectInput name="user" :options="users"  :handleChange="handleChange" />

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

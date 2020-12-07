<template>

    <div>
            <div class="form-container">
                <p id="form-title">{{title}}</p>
                <form v-on:submit.prevent="onSubmit" >
                    
                    <formInput type="text" name="title"         @handleChange="handleChange($event)"  /> 
                    <formInput type="text" name="author"        @handleChange="handleChange($event)" /> 
                    <formInput type="text" name="description"   @handleChange="handleChange($event)" /> 
                    <formInput type="text" name="urlToImage"    @handleChange="handleChange($event)" /> 
                    <formInput type="text" name="url"           @handleChange="handleChange($event)" /> 

                    <formInput type="date" name="publishedAt" title="Publish Date" @handleChange="handleChange($event)" /> 

                    <selectInput name="user" :options="users" @handleChange="handleChange($event)" />

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


    export default {
        components: { formInput ,buttonInput,selectInput},
        name: "form",
        props:["title"],
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

<style scoped>
    .form-container{
        width:40%;
        position: relative;
        padding:20px;
        /* top:50%; */
        /* left:50%; */
        margin:auto;
        text-align: center;
        /* transform:translate(-50%,-50%) */
    }
    .form-container form{
        background-color: #ebebeb;
        padding: 2px;
    }

    #form-title{
        background: #28d;
        padding: 20px;
        font-size: 1.4em;
        font-weight: normal;
        text-align: center;
        text-transform: uppercase;
        color: #fff;
    }
    

</style>
<template>

    <div>
            <div class="form-container">
                <p class = "form-title">{{title}}</p>
                <form v-on:submit.prevent="onSubmit" >
                    <form-input   type="text" name="url"          :errorMessage="errors.url" :required="true"     title="URL"     /> 
                    <select-input name="user" title="Please select a user" :options="selectOptionList"  :required="true"  optionKey="name" optionValue="id" />
                    <form-input   type="text" name="title"           title="Title" :value="info.title"       /> 
                    
                    <form-input type="text" name="author"      title="Author" /> 
                    <form-input type="text" name="description" title="Description"  /> 
                    <form-input type="text" name="urlToImage"  :errorMessage="errors.urlToImage" title="Image"   /> 

                    <form-input type="date" name="publishedAt" title="Publish Date"   /> 
                    <button-input :disabled="canSubmit" type="submit"  text="Create" />
                </form>
            </div>
        </div>
        
</template>


<script>
import {buttonInput,formInput,selectInput} from './../../inputs/'
import {validateUrl } from './../../../helpers/'
import { mapState, mapActions} from 'vuex'

import './favoriteForm.css'

    export default {
        components: { formInput ,buttonInput,selectInput},
        name: "favorite-form",
        props:{
            title:{
                type:String,
                default:""
            },
            selectOptionList:{
                type:Array,
                default:[]
            },
        },
        data(){
            return{ 
                errors:{
                    url:'',
                    urlToImage:''
                }
            }
        },
        computed: {
            canSubmit(){
                return !( this.validateForm() && this.info && this.info.url && this.info.url.length && this.info.user  )
            },
            ...mapState({   
                info: state => state.createFavoriteModule.info,
            }),
        },
        methods:{
            onSubmit(){
                if( typeof this.createFavorite === 'function' )
                    this.createFavorite()
            },
            validateForm(){
                if(this.errors  && this.info)
                {
                    this.errors.url        =   this.info.url && !validateUrl(this.info.url) ?  'Invalid Url' : ''
                    this.errors.urlToImage =   this.info.urlToImage && !validateUrl(this.info.urlToImage) ? 'Invalid Image Url' : ''
                    return !this.errors.url && !this.errors.urlToImage
                }
                return true
            },
            ...mapActions(['createFavorite'],),

          

        }


    }
</script>

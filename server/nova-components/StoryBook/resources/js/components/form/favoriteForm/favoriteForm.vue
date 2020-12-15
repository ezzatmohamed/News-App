<template>

    <div>
            <div class="form-container">
                <p class = "form-title">{{title}}</p>
                <form v-on:submit.prevent="onSubmit" >
                    <form-input   type="text" name="url"     :required="true"     title="URL"     /> 
                    <select-input name="user" title="Please select a user" :options="selectOptionList"  :required="true"  optionKey="name" optionValue="id" />
                    <form-input   type="text" name="title"           title="Title" :value="info.title"       /> 
                    
                    <form-input type="text" name="author"      title="Author" /> 
                    <form-input type="text" name="description" title="Description"  /> 
                    <form-input type="text" name="urlToImage"   title="Image"   /> 

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
        computed: {
            canSubmit(){
                return !( this.validateForm() && this.info && this.info.url && this.info.url.length && this.info.user  )
            },
            ...mapState({   
                info: state => state.createFavoriteModule.info,
                errors: state => state.createFavoriteModule.errors,
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
                    if( this.info.url && !validateUrl(this.info.url) )
                        this.changeError({name:"url",value:"Invalid Url"})
                    else
                        this.changeError({name:"url",value:""})


                    if( this.info.urlToImage && !validateUrl(this.info.urlToImage) )
                        this.changeError({name:"urlToImage",value:"Invalid Image Url"})
                    else
                        this.changeError({name:"urlToImage",value:""})

                    return !this.errors.url && !this.errors.urlToImage
                }
                return true
            },
            ...mapActions(['createFavorite','changeError'],),


        }


    }
</script>

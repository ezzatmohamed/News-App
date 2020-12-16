<template>

    <div>
            <div class="form-container">
                <p class = "form-title">{{title}}</p>
                <form v-on:submit.prevent="onSubmit" >
                    <form-input type="text" name="url"          :errorMessage="errors.url" :required="true"     title="URL" :value="info.url"    :handleChange="handleChange" /> 
                    <select-input name="user" title="Please select a user" :options="selectOptionList"  :required="true"  :value="info.user" optionKey="name" optionValue="id"  :handleChange="handleChange" />
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
import {validateUrl } from './../../../helpers/'
import { mapState, mapActions,mapMutations} from 'vuex'

import './favoriteForm.css'

    export default {
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
            handleChange(payload) {
                if(payload && payload.name && typeof payload.value !== 'undefined')
                {
                    this.changeInfo(payload)
                }
            },

            ...mapActions(['createFavorite']),
            ...mapMutations(['changeInfo','changeError'])


        }


    }
</script>

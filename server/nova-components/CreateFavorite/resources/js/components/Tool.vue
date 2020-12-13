<template>
    <div>
        <favorite-form title="Favorite Creation"
                       :selectOptionList="users"
                       :onSubmitFunction="onFavoriteSubmit"
                       /> 

    </div>
</template>

<script>
import {parseNovaApi} from './../../../../StoryBook/resources/js/helpers'

export default {    
    name:"create-favorite",
    data(){
        return {
            users:[]
        }
    },
    methods:{
        onFavoriteSubmit(info,clearForm){
            if(info && typeof clearForm === 'function')
                Nova.request()
                .post('/nova-api/favorites',info)
                .then(res=>{
                    Nova.success('Created successfully')
                    clearForm()
                })
                .catch(err=>{
                    Nova.error(`Error: ${err.message}`)
                })
        }
        }
    ,
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
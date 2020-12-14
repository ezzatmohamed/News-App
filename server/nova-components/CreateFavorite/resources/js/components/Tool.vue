<template>
    <div>
        <favorite-form title="Favorite Creation"
                       :selectOptionList="usersList"
                       :onSubmitFunction="onFavoriteSubmit"
                       /> 

    </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {    
    name:"create-favorite",
    data(){
        return {
            users:[]
        }
    },
    computed:{
            ...mapState({   
                    usersList: state => state.createFavoriteModule.usersList,
                }),
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
        },
        ...mapActions(['retrieveUsers'],)
    },
    created(){
        this.retrieveUsers()
    }
}
    
</script>
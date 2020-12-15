<template>
    <div>
        <favorite-form title="Favorite Creation"
                       :selectOptionList="usersList"
                       /> 

    </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {    
    name:"create-favorite",

    computed:{
            ...mapState({   
                    usersList: state => state.createFavoriteModule.usersList,
                }),
    },
    methods:{
        ...mapActions(['retrieveUsers'],)
    },
    created(){
        this.retrieveUsers()
    }
}
    
</script>
<template>
    <div>
        <link-input  link="create-favorite"  text="Create New Favorite" />
        <favorites-table :columns="{id:'ID',
                                    title:'Title',
                                    url:'Url',
                                    urlToImage:'Image',
                                    description:'Description',
                                    author:'Author',
                                    publishAt:'Date',
                                    user:'User'}" 
                                    />

    </div>
</template>

<script>
 
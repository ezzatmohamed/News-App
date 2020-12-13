<template>
    <div>
        <link-input  link="create-favorite"  text="Create New Favorite" />
        <favorites-table :columns="{title:'Title',
                                    url:'Url',
                                    urlToImage:'Image',
                                    description:'Description',
                                    author:'Author',
                                    publishedAt:'Date',
                                    user:'Username',
                                    email:'Email',
                                    deleted_at:'Is Deleted'
                                    }" 
                                    />

    </div>
</template>

<script>
 
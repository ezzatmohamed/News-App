<template>
    <div>
        <link-input  link="create-favorite"  text="Create New Favorite" />
        <favorites-table :columns="['id','title','url','urlToImage','description','author','publishedAt','user']" />
    </div>
</template>

<script>
 
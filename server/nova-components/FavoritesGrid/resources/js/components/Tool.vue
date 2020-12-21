<template>
  <div>
    <div class="grid-tools">
      <div class="grid-filter">
        <multiselect-input
          name="filter"
          title="Filter Favorites"
          :options="favoriteFilter"
          optionKey="name"
          optionValue="id"
          :handleChange="changeFilter"
        />
      </div>
      
        <div class="search-bar">
          <search-input
            title="search by Title, Author or user's email"
            :value="searchQuery"
            :handleChange="handleSearch"
          />
        </div>
        <div class="grid-create">
          <link-input link="create-favorite" text="Create New Favorite" />
        </div>
      </div>
    
    <no-result :value="searchQuery" v-if="noResult" />
    <favorites-table :columns="columns" :rowsData="favoritesList" v-if="!noResult" />
    <pagination
      v-if="!noResult"
      :handleNext="nextPage"
      :handlePrev="prevPage"
      :isNext="paginationInfo.isNext"
      :isPrev="paginationInfo.isPrev"
      :currentPage="paginationInfo.page"
    />
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";
import "./Tool.css";
export default {
  name: "favorites-grid",
  data() {
    return {
      columns: {
        title: "Title",
        url: "Url",
        urlToImage: "Image",
        description: "Description",
        author: "Author",
        publishedAt: "Date",
        user: "Username",
        email: "Email",
        deleted_at: "Is Deleted",
        states: "states"
      }
    };
  },
  computed: {
    columnAttribute() {
      return Object.keys(this.columns);
    },
    ...mapState({
      favoritesList: state => state.favoriteModule.favoritesList,
      favoriteFilter: state => state.favoriteModule.favoriteFilter,
      paginationInfo: state => state.favoriteModule.paginationInfo,
      searchQuery: state => state.favoriteModule.searchQuery
    }),
    noResult() {
      return (
        typeof this.searchQuery !== "undefined" &&
        this.searchQuery.length &&
        this.favoritesList &&
        !this.favoritesList.length
      );
    }
  },
  methods: {
    ...mapActions([
      "retrieveFavorites",
      "retrieveFilters",
      "getNextPage",
      "getPrevPage",
      "changeFiltersAction",
      "searchAction"
    ]),
    changeFilter(filters) {
      if (typeof this.changeFiltersAction === "function")
        this.changeFiltersAction({ filters });
      if (typeof this.retrieveFavorites === "function")
        this.retrieveFavorites({ columnAttribute: this.columnAttribute });
    },
    nextPage() {
      if (typeof this.getNextPage === "function")
        this.getNextPage({ columnAttribute: this.columnAttribute });
    },
    prevPage() {
      if (typeof this.getPrevPage === "function")
        this.getPrevPage({ columnAttribute: this.columnAttribute });
    },
    handleSearch(value) {
      if (typeof this.searchAction === "function")
        this.searchAction({
          columnAttribute: this.columnAttribute,
          searchQuery: value
        });
    }
  },
  beforeMount() {
    if (typeof this.retrieveFavorites === "function")
      this.retrieveFavorites({ columnAttribute: this.columnAttribute });
    if (typeof this.retrieveFilters === "function") this.retrieveFilters();
  }
};
</script>
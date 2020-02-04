<template>
  <div class="row">
    <a href="#" class="dropdown-trigger btn light-blue darken-4" data-target="drop-down-menu"> {{ buttonText }}</a>
    <ul id="drop-down-menu" class="dropdown-content">
      <li @click="filterMovies(genre)" v-for="(genre, i) of genres" :key="genre+i">{{ genre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    mounted(){
        this.$M.AutoInit()
    },
    computed: {
      genres(){
        let movies = this.$store.state.movies;
        let genres = [];
        movies.forEach(movie => {
          genres.push(movie.genre);
        })
        genres = Array.from(new Set(genres));
        return genres;
      }
    },
    created(){
      this.$store.dispatch("getScreenings")
    },
  methods:{
    filterMovies(genre){
        this.buttonText = genre;
        this.$emit('updateFilter', genre)
    },
  },
  data() {
    return {
      buttonText: 'Välj genre'
    }
  }
}
</script>

<style>

</style>
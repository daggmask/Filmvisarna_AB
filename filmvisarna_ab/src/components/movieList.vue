<template>
<div class="container">
   <ul class="row">
    <li v-for="(movie, i) in movies"
      v-bind:key="movie.title + i"
      class="col s12 l4" 
      @click="toMovieShowing(movie)">
        <div class="card horizontal black">
          <div class="card-image">
           <img :src="movie.images[0]" :alt="movie.title + ' poster'">
          </div>
          <div class="card-stacked">
          <div class="card-content text-flow">
           <p>{{movie.title}}</p>
           <p class="text-flow">{{movie.genre}}</p>
          </div>
        </div>
      </div>
    </li>
  </ul>

</div>
 
  
</template>
<script>
export default {
    computed: {
        movies() {
            return this.$store.state.movies;
        }
    },
    methods:{
        toMovieShowing(movie){
            this.$store.commit('movieShowing', movie);
            this.$router.push({path:'/movies/'+ movie.movieId})
        }
    },
        created(){
      this.$store.dispatch("getMovies")
    },
}
</script>


<style scoped>


</style>
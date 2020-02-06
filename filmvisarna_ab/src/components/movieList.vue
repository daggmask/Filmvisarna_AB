<template>
<div class="container">
  <ul class="row">
    <li v-for="(movie, i) in movies"
    v-bind:key="movie.title + i"
    class="col s12 m6 l4" 
    @click="toMovieShowing(movie)">
      <div class="card horizontal black">
          <img :src="movie.images[0]" :alt="movie.title + ' poster'">
        <div class="card-stacked" :style="{backgroundImage: 'url(' +  movie.images[1] + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}">
          <div class="card-content valign-wrapper">
            <div>
              <h5 class="movie-info">{{movie.title}}</h5>
              <h6 class="movie-info">{{movie.genre}}</h6>
            </div>
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
li{
  padding: 0 !important;
  margin: 1% 0;
}
.card{
  height: 15vh;
  margin: 0 1%;
}
img{
  height: 100%;
  width: auto;
}
.card-content{
  height: 100%;
  padding: 4% !important;
  background-image: linear-gradient(bottom, rgba(0, 0, 0, 0.9), rgb(0, 0, 0, 0.2));
}
.movie-info{
  width: 100%;
  margin: 1%;
}
@media screen and (min-width: 993px) {
  .card{
    height: 20vh;
  }
}

</style>
<template>
<div class="container">
  <ul class="row">
    <li v-for="(movie, i) in movies"
    v-bind:key="movie.title + i"
    class="col s12 m6 xl4" 
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
  border-radius: 4px;
}
.card:hover{
  box-shadow: 0 0 5px gray;
}
img{
  height: 100%;
  width: auto;
  border-radius: 4px 0 0 4px;
}
.card-stacked{
  border-radius: 0 4px 4px;
}
.card-content{
  height: 100%;
  padding: 0;
  padding-left: 2%;
  padding-bottom: 2%;
  background-image: linear-gradient(bottom, rgba(0, 0, 0, 0.9), rgb(0, 0, 0, 0.2));
  align-items: flex-end;
  border-radius: 0 4px 4px;
}
.movie-info{
  width: 100%;
  margin: 1%;
  text-align: left;
}
@media screen and (min-width: 1200px) {
  .card{
    height: 20vh;
  }
}

</style>
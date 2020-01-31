<template>
<div class="container">
   <ul class="row">
    <li v-for="(movie, i) in movies"
    v-bind:key="movie.title + i"
    class="col s12 m6 l4" 
    @click="toMovieShowing(movie)">
      <div class="card horizontal black">
        <div class="card-image">
          <img :src="movie.images[0]" :alt="movie.title + ' poster'">
        </div>
        <div class="card-stacked" :style="{backgroundImage: 'url(' +  movie.images[1] + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}">
          <div class="card-content">
            <h5>{{movie.title}}</h5>
            <h6>{{movie.genre}}</h6>
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
.card-image{
  width: auto;
}
img{
  height: 100%;
  width: auto;
}
.card-content{
  height: 100%;
  padding: 4% !important;
}

@media screen and (min-width: 993px) {
  .card{
    height: 20vh;
  }
}

</style>
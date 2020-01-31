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
            <h6>{{movie.title}}</h6>
            <p>{{movie.genre}}</p>
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
  height: 15vh;
  margin-bottom: 1%;
}
.card{
  height: 15vh;
}
.card-image{
  width: auto;
}
img{
  height: 100%;
  width: auto;
}
.card-content{
  padding: 4% !important;
}

@media screen and (min-width: 993px) {
  li{
    height: 30vh;
  }
  .card{
    height: 30vh;
  }
}

</style>
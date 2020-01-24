<template>
  <div>
    <div class="container col">
      <iframe class="trailer responsive-video" :src="'https://www.youtube.com/embed/' + movie.trailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="movieInfo">
        <div class="container movieInfoRow">
        <h2 class="title">{{movie.title}}</h2>
        <h3> {{movie.genre}} </h3>
        </div>

        <div class="container movieInfoRow">
          <h3> {{movie.length}}min </h3>
          <h3> {{movie.rating}}/5 </h3>
        </div>
        <p class="synopsis">{{movie.description}}</p>
      </div>
    </div>
    <screenings :movieTitle="movie.title" />
  </div>
  
</template>

<script>
import screenings from "@/components/screenings.vue"

export default {
  components: {
    screenings,
  },
computed: {
  movie() {
    let movies = this.$store.state.movies;
    for(let movie of movies){
      if(movie.movieId === this.$route.params.movie ){
        return movie;
      }
    }
    //return this.$store.state.movies[this.$route.params.movie];
    return null;
  }
},
    created(){
      this.$store.dispatch("getMovies")
    },
}
</script>

<style scoped>
.trailer{
  width: 100%;
  height: 40vh;
}
.movieInfo{
  padding: 3% 7%;
}
.synopsis{
  font-size: 1.3em;
    text-align: justify;
    padding-top: 3%;
}
.title{
  font-size: 2em;
}
.movieInfoRow{
  justify-content: space-between;
  align-items: baseline
}
</style>
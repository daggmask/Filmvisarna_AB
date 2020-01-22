<template>
  <div class="container col">
    <iframe class="trailer responsive-video" :src="'https://www.youtube.com/embed/' + movie.trailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <div class="col s12 m7">
      <h3 class="header">{{movie.title}}</h3>
        <div class="card horizontal black">
          <div class="card-image">
            <img :src="movie.images[0]" alt="MoviePoster" class="responsive-img" id="moviePoster">
          </div>
          <div class="card-stacked">
          <div class="card-content">
            <p class="genretext">{{movie.genre}}</p>
            <p class="lengthtext">{{movie.length}} min</p>
            <p class="languagetext">{{movie.language}}</p>
            <span></span><span v-for="actor of movie.actors" :key="actor" class="actortext">{{actor}}, </span>
          </div>
        </div>
      </div>
    </div>
     <div class="row">
      <div class="col s12">
        <div class="card-panel black">
          <span class="white-text">{{movie.description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.img{
  max-width: 15vw;
  height: auto;
}
.actortext{
  font-size: 0.7em;
}
.genretext{
  font-size: 1.2em;
}
.lengthtext{
  font-size: 0.8em;
}
.languagetext{
  font-size: 0.7em;
}
</style>
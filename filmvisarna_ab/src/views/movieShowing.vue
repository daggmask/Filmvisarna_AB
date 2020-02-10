<template>
  <div>
    <div class="container col">
      <iframe class="trailer responsive-video" :src="'https://www.youtube.com/embed/' + movie.trailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div class="col s12">
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
      <div class="divider"></div>
      <div class="row">
        <div class="col s12">
          <div class="card-panel black moviedisc">
            <span class="white-text">{{movie.description}}</span>
          </div>
          <div class="card-panel black smallmovieinfo">
            <div class="subheader">Regissör:</div>
            <div class="">{{movie.director}}</div>
            
            <div class="subheader">Produktions länder:</div>
            <div><span v-for="country of movie.productionCountries" :key="country" >{{country}} </span></div>
            
            <div class="subheader">Undertext:</div>
            <div>{{movie.subtitles}}</div>
            
            <div class="subheader">Produktions år:</div>
            <div>{{movie.productionYear}}</div>
          </div>
          
          
        </div>
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
.subheader{
  font-size: 0.9em;
  margin-top: 0.5%;
}
#moviePoster{
  width: 35vw;
}
.smallmovieinfo{
  padding-top: 0%
}
.moviedisc{
  padding-bottom: 2%;
}
@media screen and (min-width: 768px){
  #moviePoster{
    width: 15vw;
  }
  .moviedisc{
    width: 50vw;
  }
}
</style>
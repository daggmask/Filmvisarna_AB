<template>

  <div class="col">
      <div class="carousel center-block center-align">
          <router-link
          :to="'/movies/' + movie.movieId"
          class="carousel-item"
          href="javascript:void(0)"
          v-for="(movie, i) in movies"
          :key="i + movie.title"
          >
            <img :src="movie.images[0]" :alt="movie.title + ' poster'">
          </router-link>
      </div>
      <div class="container col">
        <div class="row">
          <FilteringButton class="col s12 m4 l2 no-padding" :type="'datum'"></FilteringButton>
        </div>
        <MovieList></MovieList>
      </div>

      
  </div>
</template>

<script>
import MovieList from '@/components/movieList.vue'
import FilteringButton from '@/components/FilteringButton.vue'

export default {
    components:{
        MovieList,
        FilteringButton,
    },

  computed: {
    movies() {
      let movies = this.$store.state.movies;
      return movies;
    }
  },
  methods: {
    toMovieShowing(movie) {
      try {
        console.log(movie);
        this.$router.push({ path: "/movies/" + movie.movieId });
      } catch {
        console.log();
      }
    }
  },
  created() {
    this.$store.dispatch("getMovies");
  },
  updated(){
    let elems = document.querySelectorAll('.carousel');
    this.$M.Carousel.init(elems)
    
    
  }
};
</script>

<style scoped>
.carousel {
box-sizing: border-box !important;
width: 100vw !important;
perspective: none !important;
-webkit-perspective: none !important;
height: 55vh !important;
margin-bottom: 2rem;
}
a{
  height: 80% !important;
}
.no-padding{
  padding: 0;
}
</style>
<template>
  <div>
      <div class="carousel movieImageLoop">
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
  </div>
</template>

<script>
export default {
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
height: 60vh !important;
}

</style>
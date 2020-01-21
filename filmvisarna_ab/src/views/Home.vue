<template>
  <div class="carousel container" >
    <img :src= movie.images[1]
    v-for="(movie, i) in movies"
    v-bind:key="movie.title + i + movie.images[1]"
    :movie="movie"
    @click="toMovieShowing(movie)"  
    class="responsive-img pic">
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
                try{
            console.log(movie)
            this.$router.push({path:'/movies/'+ movie.movieId})
                }
                catch{
                    console.log()
                }
        }
    },
        created(){
      this.$store.dispatch("getMovies")
    },
}

</script>

<style>

@keyframes display {
  0% {
    transform: translateX(100%);
    opacity: 1;
  }
  10% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.carousel{
    margin: 0;
    padding: 0;
    left:15%;
}
.carousel .pic{
height: 100%;
}
img {
  position: absolute;
  opacity: 0;
  animation: display 15s infinite;
}
.pic{
    width: 70vw;
}
img:nth-child(2) {
  animation-delay: 3s;
}
img:nth-child(3) {
  animation-delay: 6s;
}
img:nth-child(4) {
  animation-delay: 9s;
}
img:nth-child(5) {
  animation-delay: 12s;
}
</style>

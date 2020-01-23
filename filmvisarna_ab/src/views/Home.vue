<template>
  <div class="carousel container" >
    <img :src= movie.images[1]
    v-for="(movie, i) in movies"
    v-bind:key="movie.title + i + movie.images[1]"
    :movie="movie"
    @click="toMovieShowing(movie)"  
    class="responsive-img pic">
    <p class="movieTitle">movie text</p>
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

<style scoped>

@keyframes display {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}
.carousel{
    margin: 0;
    padding: 0;
    
}
.carousel .pic{
height: 100%;
}
img {
  position: absolute;
  opacity: 0;
  animation: display 20s infinite;
}
.movieTitle{
  position: absolute;
  bottom: 8px;
  left: 16px;
}
.pic{
    width: 70vw;
    left: 15vw;
    margin-top: 4%;
}
img:nth-child(2) {
  animation-delay: 4s;
}
img:nth-child(3) {
  animation-delay: 8s;
}
img:nth-child(4) {
  animation-delay: 12s;
}
img:nth-child(5) {
  animation-delay: 16s;
}
@media screen and (max-width: 768px){
    .pic{
        width: 100vw;
        left: 0vw;
    }
}
</style>

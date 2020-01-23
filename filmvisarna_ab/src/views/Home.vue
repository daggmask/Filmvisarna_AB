<template>
  <div id="slider">
      <figure>
    <img :src= movie.images[1]
    v-for="(movie, i) in movies"
    v-bind:key="movie.title + i + movie.images[1]"
    :movie="movie"
    @click="toMovieShowing(movie)"  
    class="responsive-img pic">

    <p v-for="(movie, i) in movies"
    v-bind:key="movie.title + i"
    class="movieTitle">
    {{movie.title}}
    </p>
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

#slider{
    overflow: auto;
}
#slider figure{
    position: relative;
    width: 600%;
    margin: 0;
    left: 0;
    animation: 20s slider infinite;
}
#slider figure img{
    height: 50vh;
    margin-top: 4%;
}
@keyframes slider{
0%{
    left: 100%;
}
100%{
    left: -500%;
}
}
</style>


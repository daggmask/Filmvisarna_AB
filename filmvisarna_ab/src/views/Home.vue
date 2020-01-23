<template>
  <div id="slider">
      <figure>
    <img :src= movie.images[1]
    v-for="(movie, i) in movies"
    v-bind:key="movie.title + i + movie.images[1]"
    :movie="movie"
    @click="toMovieShowing(movie)"  
    class="responsive-img pic">
    <p class="movieTitle">movie text</p>
    </figure>
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
    left: 0;
}
20%{
    left: 0;
}
25%{
    left: -100%;
}
45%{
    left: -100%;
}
50%{
    left: -200%;
}
70%{
    left: -200%;
}
75%{
    left: -300%;
}
95%{
    left: -300%;
}
100%{
    left: -400%;
}
}
</style>


<template>
  <div id="slider">
      <figure>
    <img :src= movie.images[1]
    v-for="(movie, i) in movies"
    v-bind:key="movie.title + i + movie.images[1]"
    :movie="movie"
    @click="toMovieShowing(movie)"  
    class="responsive-img pic">

    <div class="movieTitle">
    <p v-for="(movie, i) in movies"
    v-bind:key="movie.title + i">
    {{movie.title}}
    </p>
    </div>
   
   
      </figure>
  </div>

</template>

<script>
export default {
    computed: {
        movies() {
            let movie = this.$store.state.movies
            movie.push(movie[0])
            return movie
            // return this.$store.state.movies;
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
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
#slider{
    overflow: hidden;
}
#slider figure {
    position: relative;
    width: 600%;
    margin: 0;
    left: 0;
    animation: 20s slider infinite;
    height: 60vh;
}
#slider figure img{
    height: 50vh;
    width: 100vw;
    float: left;
}
@keyframes slider{
0%{
    left: 0;
}
100%{
    left: -500%;
}
}
.movieTitle{
  display: flex;
  justify-content: space-around;
  position: absolute;
  align-items: flex-end;
  width: 100%;
  height: 60vh;
  padding:0%;
  font-family: 'Lato', sans-serif;
  font-size: 1.5em
}
p{
  width: 40vw;
  text-align: center;
  height: 10vh;
}
</style>


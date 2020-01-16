<template>
  <ul class="container col">
      <li v-for="(movie, i) in movies"
        v-bind:key="movie.title + i"
        class="container movie-items" 
        @click="toMovieShowing(movie)">
        <div class="container posterDiv">
            <img :src="movie.poster" alt="MoviePoster">
        </div>
        <div class="movieInfo" :style="{ backgroundImage: 'url(' + movie.poster  + ')', backgroundPosition:'center'}">
            <div class="colorBackground container col">
            <h2>{{ movie.title }}</h2>
            <p>{{ movie.genre }}</p>
            </div>
        </div>
      </li>
  </ul>
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
            this.$store.commit('movieShowing', movie);
            this.$router.push({path:'/movies/'+ movie.url})
        }
    }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}
.container{
    display: flex;
    
}
.col{
    flex-direction: column;
    width: 100%;
}
img{
    max-width: 20vw;
    height: auto;
    
}
.colorBackground{
    
    justify-content: flex-end;
    padding-left: 3%;
    padding-bottom: 3%;
    
    /* background-color: rgb(3, 3, 3,0.4); */
     background-image: linear-gradient(bottom, rgba(0, 0, 0, 0.9), rgb(0, 0, 0, 0.2)); 
    height: 100%;
}
.movie-items{
    width: 70%;
    justify-items: center;
    margin-top: 1.5%;
}

ul{
    align-items: center
    
}
.posterDiv{
    width: 30%
}

.movieInfo{
    width: 67%
}
</style>
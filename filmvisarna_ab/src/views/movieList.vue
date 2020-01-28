<template>

<ul class="container col">
    <li v-for="(movie, i) in movies"
    v-bind:key="movie.title + i"
    class="container movie-items" 
    @click="toMovieShowing(movie)">

        <div class="container posterDiv">
            <img :src="movie.images[0]" alt="MoviePoster" class="responsive-img" id="moviePoster">
        </div>

        <div class="movieInfo" :style="{ backgroundImage: 'url(' + movie.images[1]  + ')', backgroundPosition:'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}">
            <div class="colorBackground container col">
                <p class="flow-text movietitle">{{ movie.title }}</p>
                <p class="flow-text moviegenre">{{ movie.genre }}</p>
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
            this.$router.push({path:'/movies/'+ movie.movieId})
        }
    },
    created(){
        this.$store.dispatch("getMovies")
    },
}
</script>

<style scoped>
img{
    max-width: 20vw;
    height: auto;    
}

.colorBackground{
    justify-content: flex-end;
    padding-left: 3%;
    padding-bottom: 3%;
    background-image: linear-gradient(bottom, rgba(0, 0, 0, 0.9), rgb(0, 0, 0, 0.2)); 
    height: 100%;
    width: 100%;
}

.movie-items{
    justify-items: center;
    margin-top: 1.5%;
}

#moviePoster{
    width: 95%;
}

ul{
    align-items: center   
}
.posterDiv{
    width: 30%
}

.movietitle{
    
    margin-bottom: 0%;
}
.movieInfo{
    width: 100%
}
</style>
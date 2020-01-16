<template>
  <ul>
      <li v-for="movie in movies"
        v-bind:key="movie.title"
        class="container">
        <div class="container">
            <img :src="movie.poster" alt="MoviePoster">
        </div>
        <div class="container col" :style="">
            <h2>{{ movie.title }}</h2>
            <p>{{ movie.genre }}</p>
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
    }
}
</script>

<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.container{
    display: flex;
}
.col{
    flex-direction: column;
}
img{
    max-width: 20vw;
    height: auto;
}
</style>
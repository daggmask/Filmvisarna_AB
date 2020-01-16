<template>
  <div>
    <h1>Tjena</h1>
    
    <h2 class="title">{{movie.title}}</h2>
    <p class="synopsis">{{movie.synopsis}}</p>
    <!-- Visning komponent -->
  </div>
</template>

<script>
export default {
computed: {
  movie() {
    return this.$store.state.movies[this.$route.params.movie];
  }
}
}
</script>

<style scoped>
.trailer{
  width: 70%;
  height: auto;
}
</style>
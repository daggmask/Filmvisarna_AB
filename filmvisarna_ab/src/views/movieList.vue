<template>
  <ul>
      <li v-for="movie in movies"
        v-bind:key="movie.title"
        class="container">
        <div class="container">
            img
        </div>
        <div class="container">
            <h2>{{ movie.title }}</h2>
            <p>{{ movie.genre }}</p>
        </div>
      </li>
  </ul>
</template>

<script>
export default {
    data(){
        return {
            movies:[
                {
                    title: 'grinch',
                    genre: 'comedy',
                },
                {
                    title: 'Dagboken',
                    genre: 'drama'
                },
                {
                    title: 'afterlife',
                    genre: 'action'
                },

            ]
        }
    }

}
</script>

<style>
*{
    box-sizing: border-box;
}
.container{
    display: flex;
}
</style>
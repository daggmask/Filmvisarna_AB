<template>
  <ul>
      <li v-for="movie in movies"
        v-bind:key="movie.title">
        <h2>{{movie.title}}</h2>

      </li>
  </ul>
</template>

<script>
export default {
    data(){
        return {
            movies:[
                {
                    title: 'grinch'
                },
                {
                    title: 'Dagboken'
                },
                {
                    title: 'afterlife'
                },

            ]
        }
    }

}
</script>

<style>

</style>
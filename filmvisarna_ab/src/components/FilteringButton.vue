<template>
  <div class="col s6 m4 l3 center-align">
    <a href="#" class="dropdown-trigger btn light-blue darken-4" :data-target="'drop-down-menu-' + type"> {{ buttonText }}</a>
    <ul :id="'drop-down-menu-' + type" class="dropdown-content">
      <li @click="filterMovies('')">Alla</li>
      <li @click="filterMovies(content)" v-for="(content, i) of dropdownContents" :key="content+i">{{ content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    props:{
      type: String,
    },
    mounted(){
      this.$M.AutoInit();

    },
    computed: {
      dropdownContents(){
        switch(this.type) {
          
          case "genre": {
            let movies = this.$store.state.movies;
            let genres = [];
            movies.forEach(movie => {
              genres.push(movie.genre);
            })
            genres = Array.from(new Set(genres));
            return genres;
          }
          case "date": {
            let screenings = this.$store.state.screenings;
            let dates = [];
            screenings.forEach(screening => {
              dates.push(screening.time);
            })
            dates = Array.from(new Set(dates));
            return dates;
      
           
          }
        }
        return null;
      }
    },
    created(){
      this.$store.dispatch("getScreenings")
    },
  methods:{
    filterMovies(filter){
        if(filter !== ''){
          this.buttonText = filter;
        } else {
          this.buttonText = 'Välj genre';
        }
        this.$emit('updateFilter', filter)
    },
  },
  data() {
    return {
      buttonText: this.type
    }
  }
}
</script>

<style>

</style>
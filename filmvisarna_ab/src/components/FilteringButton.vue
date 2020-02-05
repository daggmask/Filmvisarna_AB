<template>
  <div>
    <a href="#" class="dropdown-trigger btn light-blue darken-4" data-target="drop-down-menu"> {{ buttonText }}</a>
    <ul id="drop-down-menu" class="dropdown-content">
      <li class="light-blue darken-2" @click="filterMovies('')"><span class="center-align all">Alla</span></li>
      <li class="light-blue darken-2" @click="filterMovies(content)" v-for="(content, i) of dropdownContents" :key="content+i"><span class="center-align contents">{{ content }}</span></li>
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
            let dates = [];
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
    filterMovies(genre){
        if(genre !== ''){
          this.buttonText = genre;
        } else {
          this.buttonText = 'Välj genre';
        }
        this.$emit('updateFilter', genre)
    },
  },
  data() {
    return {
      buttonText: 'Välj genre'
    }
  }
}
</script>

<style scoped>
.col > .btn{
  width: 100%;
  padding: 0;
}
.all{
  border: 1px white solid;
}
.contents{
  border-left: 1px white solid;
  border-right: 1px white solid;
  border-bottom: 1px white solid;
}
.dropdown-content li>span{
  color: white;
}
</style>
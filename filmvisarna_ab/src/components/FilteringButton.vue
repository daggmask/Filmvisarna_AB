<template>
  <div>
    <a href="#" class="dropdown-trigger btn light-blue darken-4" :data-target="'drop-down-menu-' + type"> {{ buttonText }}</a>
    <ul :id="'drop-down-menu-' + type" class="dropdown-content">
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
          case "datum": {
            let screenings = this.$store.state.screenings;
            let dates = [];
            
            screenings.sort(function(a,b){
              return(b-a);
            })
            screenings.forEach(screening => {
              var months = ['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Aug','Sep','Okt','Nov','Dec'];
              let timeToString = screening.time.getDate() + ' ' + months[screening.time.getMonth()] + ' ' + screening.time.getFullYear();
              
              if(screening.time > new Date()){
                dates.push(timeToString);
              }
            })
              dates = Array.from(new Set(dates))            
              return dates;
          }
        }
        return null;
      }
    },
  methods:{
    filterMovies(filter){
        if(filter !== ''){
          this.buttonText = filter;
        } else {
          switch (this.type){
            case "genre":
              this.buttonText = 'Välj genre';
              break;
            case "datum":
              this.buttonText = 'Välj datum';
              break;
          }
        }
        this.$emit('updateFilter', filter)
        console.log(filter)
    },
  },
  data() {
    return {
      buttonText: `Välj ${this.type}`
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
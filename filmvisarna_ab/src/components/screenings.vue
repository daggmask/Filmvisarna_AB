<template>
  <div class="container col">
    <div class="row no-margin">
      <div class="btn light-blue darken-4 col s4 offset-s4"
      @click="isOpen = !isOpen, active = active">
        <span>Välj datum</span>
      </div>
    </div>
    <div v-if="isOpen">
      <div class="row no-margin"
      v-for="(date, i) in dates"
      :key="i + date"
      @click="setDate(date), isOpen = !isOpen">
        <div
        class="btn light-blue darken-3 col s4 offset-s4 date"
        >
        {{ date }}
        </div>
      </div>
    </div>
    <div class="container  ">
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    
  },
  computed: {
    dates(){
      let screenings = this.$store.state.screenings;
      let dates = [];
      for(let screening of screenings) {
        if(this.movieTitle === screening.film){
          dates.push(screening.date);
        }
      }
      dates = Array.from(new Set(dates))
      return dates;
    },
  },
  methods: {
    screenings(date){
      let screenings = this.$store.state.screenings;
      let movieScreenings = []
      for(let screening of screenings) {
        if(screening.film === this.movieTitle && screening.date === date) {
          movieScreenings.push(screening);
        }
      }
      return movieScreenings;
    },
    setDate(date){
      this.date = date;
    }
  },
  created(){
    this.$store.dispatch("getScreenings");
  },
  data() {
    return {
      movieTitle: "Parasit",
      date: String,
      isOpen: false,
      active: false,
    }
  }
}
</script>
  
<style scoped>
  .date{
    text-align: center;
  }
  .no-margin{
    margin-bottom: 0px;
  }
  .btn:hover{
    background-color: #1e88e5 !important;
  }
</style>
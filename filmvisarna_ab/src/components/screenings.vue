<template>
  <div class="container col screenings">

    <div class="row date-btn-row">
      <a href="#"
      class="btn-large light-blue darken-4 col s12"
      @click="isOpen = !isOpen"
      >
        <h5>Välj datum</h5>
      </a>
    </div>

    <div class="dates-div" v-if="isOpen">
      <div class="row dates-row"
      v-for="(date, i) in dates"
      :key="i + date">
        <a href="#"
        class="btn-large light-blue darken-2 col s12 date"
        @click="setDate(date), isOpen = !isOpen">
        {{ date }}
        </a>
      </div>
    </div>

    <div class="row" v-if="!isOpen">
      <ul :class="{ hidden: !isOpen }" class="collection">
        <li class="collection-item col s12 light-blue darken-1"
        v-for="(screening, i) in screeningsOnSelectedDate"
        :key="i + screening">
          <div class="col s4 valign-wrapper">
            <h5>{{ screening.time }}</h5>
          </div>
          <div class="col s8 valign-wrapper">
            <p class="left-align">{{ screening.auditorium }}</p>
            <p class="">Platser kvar</p>
          </div>
        </li>
      </ul>
        
    </div>

  </div>
</template>

<script>
export default {
  props: {
    
  },
  computed: {
    screenings(){
      let allScreenings = this.$store.state.screenings;
      let currentMovieScreenings = [];
      for(let screening of allScreenings){
        if(screening.film === this.movieTitle){
          currentMovieScreenings.push(screening);
        }
      }
      return currentMovieScreenings;
    },
    dates(){
      let dates = [];
      for(let screening of this.screenings) {
        if(this.movieTitle === screening.film){
          dates.push(screening.date);
        }
      }
      dates = Array.from(new Set(dates))
      return dates;
    },
    screeningsOnSelectedDate(){
      let screeningsOnSelectedDate = []
      for(let screening of this.screenings){
        if(screening.date === this.date){
          screeningsOnSelectedDate.push(screening);
        }
      }
      return screeningsOnSelectedDate;
    }
  },
  methods: {
    setDate(date){
      this.date = date;
    }
  },
  created(){
    this.$store.dispatch("getScreenings");
    this.date = new Date();
  },
  data() {
    return {
      movieTitle: "Parasit",
      date: String,
      isOpen: false,
    }
  }
}
</script>
  
<style scoped>
  .date-btn-row{
    margin-bottom: 1px;
  }
  .dates-row{
    margin-bottom: 1px;
  }
  .no-margin{
    margin-bottom: 0px;
  }
  .btn:hover{
    background-color: #1e88e5 !important;
  }
  .hidden{
    border: 0px;
  }
</style>
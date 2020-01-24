<template>
  <div class="container col screenings">

    <div class="row date-btn-row">
      <a href="javascript:void()"
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
        <a href="javascript:void()"
        class="btn-large light-blue darken-2 col s12 date"
        @click="setDate(date), isOpen = !isOpen, screeningsAreShowing = true">
        {{ date }}
        </a>
      </div>
    </div>

    <div class="row" v-if="!isOpen">
      <ul :class="{ hidden: !screeningsAreShowing }" class="collection">
        <li class="collection-item col s12 light-blue darken-1"
        v-for="(screening, i) in screeningsOnSelectedDate"
        :key="i + screening">
          <div class="col s4  valign-wrapper">
            <h4>{{ screening.time }}</h4>
          </div>
          <div class="auditorium-info col s8">
            <h5>
              {{ screening.auditorium }}<br>
              Platser kvar
            </h5>
          </div>
        </li>
      </ul>
        
    </div>

  </div>
</template>

<script>
export default {
  props: {
    movieTitle: String,
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
      date: String,
      isOpen: false,
      screeningsAreShowing: false,
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
  .screening-time{
    text-align: center;
  }
</style>
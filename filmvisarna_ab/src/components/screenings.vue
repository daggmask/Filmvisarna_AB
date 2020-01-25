<template>
  <div class="container col screenings">

    <div class="row date-btn-row">
      <a href="javascript:void(0)"
      class="btn-large light-blue darken-4 col s12 m6 offset-m3 xl4 offset-xl4"
      @click="isOpen = !isOpen">
        <h5>{{ date }}</h5>
      </a>
    </div>

    <div class="dates-div" v-if="isOpen">
      <div class="row dates-row"
      v-for="(date, i) in dates"
      :key="i + date">
        <a href="javascript:void(0)"
        class="btn-large light-blue darken-2 col s12 m6 offset-m3 xl4 offset-xl4"
        @click="setDate(date), isOpen = !isOpen, screeningsAreShowing = true">
          <h5>{{ date }}</h5>
        </a>
      </div>
    </div>

    <div class="row" v-if="!isOpen">
      <ul :class="{ hidden: !screeningsAreShowing }" class="collection col s12 m6 offset-m3 xl4 offset-xl4">
        <li class="collection-item col s12 light-blue darken-1"
        v-for="(screening, i) in screeningsOnSelectedDate"
        :key="i + screening">
          <div class="row screening-info valign-wrapper">
            <div class="col s4 m5 center-align">
              <h4>{{ getScreeningTime(screening.time) }}</h4>
            </div>
            <div class="auditorium-info col s8 m7">
              <h6>
                {{ screening.auditorium }}<br>
                Platser kvar
              </h6>
            </div>
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
          let date = this.getDateAsString(screening.time);
          dates.push(date);
        }
      }
      dates = Array.from(new Set(dates))
      return dates;
    },
    screeningsOnSelectedDate(){
      let screeningsOnSelectedDate = []
      for(let screening of this.screenings){
        if(this.getDateAsString(screening.time) === this.date){
          screeningsOnSelectedDate.push(screening);
        }
      }
      return screeningsOnSelectedDate;
    }
  },
  methods: {
    setDate(date){
      this.date = date;
    },
    getScreeningTime(timestamp){
      let screeningDate = timestamp.toDate();
      let screeningTime = `${screeningDate.getHours()}:${this.getMinutesAsString(screeningDate.getMinutes())}`;
      return screeningTime;      
    },
    getDateAsString(timestamp){
      let date = timestamp.toDate();
      return `${date.getDate()} ${this.getMonthName(date.getMonth())} ${date.getFullYear()}`
    },
    getMonthName(monthNumber){
      switch(monthNumber) {
        case 0:
          return "januari";
        case 1:
          return "februari";
        case 2:
          return "mars";
        case 3:
          return "april";
        case 4:
          return "maj";
        case 5:
          return "juni";
        case 6:
          return "juli";
        case 7:
          return "augusti";
        case 8:
          return "september";
        case 9:
          return "oktober";
        case 10:
          return "november";
        case 11:
          return "december";
      }
    },
    getMinutesAsString(minuteNumber){
      switch(minuteNumber){
        case 0:
          return '00';
        case 1:
          return '01';
        case 2:
          return '02';
        case 3:
          return '03';
        case 4:
          return '04';
        case 5:
          return '05';
        case 6:
          return '06';
        case 7:
          return '07';
        case 8:
          return '08';
        case 9:
          return '09';
      }
      return minuteNumber;
    }
  },
  created(){
    this.$store.dispatch("getScreenings");
  },
  data() {
    return {
      date: 'Välj datum',
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
  .screening-info{
    margin: 0;
  }
  .screening-time{
    text-align: center;
  }
  .collection{
    padding: 0;
  }
</style>
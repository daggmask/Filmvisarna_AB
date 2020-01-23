<template>
  <div class="container col screenings">
    <div class="row">
      <div class="col s12">
        <a href="#"
        class="btn light-blue darken-4 col s6 offset-s3"
        @click="isOpen = !isOpen"
        >
          Välj datum
        </a>
      </div>
    </div>

    <div class="row"
    v-if="isOpen">
      <div class="col s12"
      v-for="(date, i) in dates"
      :key="i + date">
        <a href="#"
        class="btn light-blue darken-2 col s6 offset-s3"
        @click="setDate(date), isOpen = !isOpen">
        {{ date }}
        </a>
      </div>
    </div>

    <div class="row">
      <div class="col s12">
        <div class="col s8 offset-s2"
        v-for="(screening, i) in screeningsOnSelectedDate"
        :key="i + screening">
          <div class="col s3">
            {{ screening.time }}
          </div>
          <div class="col s9">
            <span class="col s12">{{ screening.auditorium }}</span>
            <span class="col s12">Platser kvar</span>
          </div>
        </div>
      </div>
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
  .no-margin{
    margin-bottom: 0px;
  }
  .btn:hover{
    background-color: #1e88e5 !important;
  }
</style>
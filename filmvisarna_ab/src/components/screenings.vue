<template>
  <div id="screenings-component">
    <ul>
      <li
      v-for="(date, i) in dates"
      :key="i + date">
        <div>{{ date }}</div>
        <ul>
          <li
          v-for="(screening, i) in screenings(date)"
          :key="i + screening">
            <span>{{ screening.time }}</span>
            <span>{{ screening.auditorium }}</span>
            <span>Platser kvar</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  computed: {
    dates(){
      let screenings = this.$store.state.screenings;
      let dates = [];
      for(let screening of screenings) {
        if(this.movie.title === screening.film){
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
        if(screening.film === this.movie.title && screening.date === date) {
          movieScreenings.push(screening);
        }
      }
      return movieScreenings;
    },
  },
  created(){
    this.$store.dispatch("getScreenings");
  },
}
</script>

<style>

</style>
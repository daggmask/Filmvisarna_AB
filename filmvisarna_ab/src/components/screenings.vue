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
}
</script>

<style>

</style>
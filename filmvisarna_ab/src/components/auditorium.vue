<template>
  <div>
    <div class="row" v-for="(row, i) in screening.seats" :key="row + i">
      <div class="col s1 white seat" v-for="(seat, j) in row" :key="seat + j" :class="{marked: seat.isMarked}" @click="seat.isMarked = !seat.isMarked">
        {{seat.isAvailable}}
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  computed:{
    screening() {
      let screenings = this.$store.state.screenings;
      let movieScreening;
      for (let screening of screenings) {
        if (screening.id === this.$route.params.screening) {
          movieScreening = screening;
        }
      }
      return movieScreening;
    },
  },
}
</script>

<style>
.marked{
  background-color: beige !important;
}
.seat{
  border-radius: 0 0 4px 4px;
  margin: 6px;
}
</style>
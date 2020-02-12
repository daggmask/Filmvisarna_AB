<template>
  <div ref="auditorium">
    <div class="row" v-for="(row, i) in screening.seats" :key="row + i">
      <div 
      class="white seat" 
      v-for="(seat, j) in row" 
      :key="seat + j"
      :class="{marked: seat.isMarked}"
      :style="{margin: seatMargin + 'px', width: seatSize + 'px', height: seatSize + 'px'}" 
      @click="clicked(), seat.isMarked = !seat.isMarked"></div>
    </div>
  </div>
  
</template>

<script>

export default {
  data(){
    return {
      seatMargin: 4,
      auditoriumWidth: 0,
    }
  },
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
    longestRow(){
      let seats = this.screening.seats;
      let length = 0;
      seats.forEach(row => {
        row = Object.values(row);
        if(row.length > length) {
          length = row.length;
        }
      })
      return length;
    },
    seatSize(){
      let width = this.auditoriumWidth;
      width -= (this.longestRow * this.seatMargin * 2);
      let seatSize = width / this.longestRow;
      return seatSize;
    }
  },
  mounted(){
    this.getAuditoriumWidth();
  },
  created() {
    window.addEventListener('resize', this.onReziseListener.bind(this), true)
  },
  updated(){
    this.getAuditoriumWidth();
  },
  methods:{
    onReziseListener() {
      if(this.$refs.auditorium){
        this.auditoriumWidth = this.$refs.auditorium.clientWidth
      }
    },
    clicked(){
      
    },
    updateSeat(seat){
      seat.isAvailable = false;
    },
    getAuditoriumWidth(){
      if(!this.runOnce) {
        this.auditoriumWidth = this.$refs.auditorium.clientWidth
        this.runOnce = true;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onReziseListener, true)
  }
}
</script>

<style scoped>
.marked{
  background-color: beige !important;
}
.seat{
  border-radius: 0 0 4px 4px;
}
.row{
  margin: 0;
  display: flex;
  justify-content: center;
}
</style>
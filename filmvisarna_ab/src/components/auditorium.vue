<template>
  <div ref="auditorium">
    <div class="flow-text headline">Välj Platser</div>
    <div class="movie-screen-container">
     <div class="movie-screen"></div>
    </div>
    <div class="row seats" v-for="(row, i) in screening.seats" :key="i">
      <div 
      class="white seat" 
      v-for="(seat, j) in row" 
      :key="seat.x + seat.y + i + j"
      :class="{unavailable: !seat.isAvailable, marked: seat.isMarked, available: seat.isAvailable, doneMarking: numberOfSeats == 0}"
      :style="{margin: seatMargin + 'px', width: seatSize + 'px', height: seatSize + 'px'}" 
      @click="updateSeat(seat)"></div>
    </div>
    <div class="row">
      <div class="btn col light-blue darken-4 s5 l2 offset-l3" @click="returnToTicketOptions()">Tillbaka</div>
      <div class="btn light-blue darken-4 col s5 offset-s2 l2 offset-l2" @click="bookTickets()">Boka</div>
    </div>
    <div class="row">
      <p class="col s12 center-align text-flow" v-for="(seat, i) in seatsMarked" :key="seat + i">Rad : {{seat.y+1}} Plats: {{seat.x+1}}</p>
    </div>
    
  </div>
  
</template>

<script>

export default {
  data(){
    return {
      seatMargin: 4,
      auditoriumWidth: 0,
      numberOfSeats: 0,
      numberOfSeatsRead: false,
      seatsMarked: [] 
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
        console.log(row, 'row')
        row = Object.values(row);
        if(row.length > length) {
          length = row.length;
        }
      })
      return length;
    },
    seatSize(){
      
      let width = this.auditoriumWidth;
      let seatSize;
      if(width > 840){
        seatSize = 25;
      }else if(width > 621){
        seatSize = 45
      }
      else{
        width -= (this.longestRow * this.seatMargin * 2);
        seatSize = width / this.longestRow;

      }
      return seatSize;
    }
  },
  mounted(){
    this.getAuditoriumWidth();
  },
  created() {
    window.addEventListener('resize', this.onResizeListener.bind(this))
  },
  updated(){
    this.getAuditoriumWidth();
    if(!this.numberOfSeatsRead){
        let numberOfTickets = this.$store.state.numberOfTickets
        this.numberOfSeats = numberOfTickets.numberOfRegularTickets +
                             numberOfTickets.numberOfChildTickets +
                             numberOfTickets.numberSeniorCitizenTickets;
        this.numberOfSeatsRead = true;
    }
  },
  methods:{
    returnToTicketOptions(){
      this.$emit('return')
      this.removeIsMarkedFromSeats()
    },
    bookTickets(){
      this.removeIsMarkedFromSeats();
      this.changeSeatAvailabilty();
      this.addSeatsToBooking();
      this.$store.dispatch('publishBooking', this.$store.state.booking)
      this.$emit('toConfirmation')
    },
    addSeatsToBooking(){
      this.$store.commit('updateBooking',{bookedSeats: this.seatsMarked, seats: this.screening.seats})
    },
    removeIsMarkedFromSeats(){
      this.screening.seats.forEach(row =>{
        row = Object.values(row) 
        row.forEach(seat =>{
          delete seat.isMarked;
        })
      })
    },
    changeSeatAvailabilty(){
      this.screening.seats.forEach(row =>{
        row = Object.values(row)

        row.forEach(seat =>{

          this.seatsMarked.forEach(marked =>{
            if(marked.x === seat.x && marked.y === seat.y){
              seat.isAvailable = false;
            }
          })  
        })
      })
    },
    onResizeListener() {
      if(this.$refs.auditorium){
        this.auditoriumWidth = this.$refs.auditorium.clientWidth
      }
    },
    removeMarkedSeat(seatToRemove){
      let remainingSeats = [];
      for(let seat of this.seatsMarked) {
        if(seat.x === seatToRemove.x && seat.y === seatToRemove.y){
          continue;
        }
        remainingSeats.push(seat)
      }
     this.seatsMarked = remainingSeats;
    },
    updateSeat(seat){
      if(seat.isAvailable && !seat.isMarked && this.numberOfSeats > 0 ){
        this.numberOfSeats--;
        seat.isMarked = !seat.isMarked;
        this.seatsMarked.push(seat)
      }else if(seat.isAvailable && seat.isMarked){
        this.numberOfSeats++;
        this.removeMarkedSeat(seat)
        seat.isMarked = !seat.isMarked

      }
      console.log(this.seatsMarked)
    },
    getAuditoriumWidth(){
      if(!this.runOnce) {
        this.auditoriumWidth = this.$refs.auditorium.clientWidth
        this.runOnce = true;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResizeListener)
  }
}
</script>

<style scoped>
.seat{
  border-radius: 2px 2px 6px 6px;
}
.seats{
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
}
.available{
  background-color: white !important;
}
.marked{
  background-color: #01579b !important;
}
.unavailable{
  background-color: red !important;
}
.movie-screen{
  margin-top: 5%;
  margin-bottom: 10%;
  height: 0;
  border-top: 50px solid white;
  border-right: 30px solid transparent;
  border-left: 30px solid transparent;
  width: 100%;
}
.movie-screen-container{
  display: flex;
  justify-content: center;
}
.headline{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.5rem;
}
.doneMarking{
  opacity: 0.7 !important;
}
.btn{
  margin-top: 3%;
  width: 100%;
  font-size: 1rem;
}

@media screen and (min-width: 1200px){
  .movie-screen{
    width: 40%;
    margin-bottom: 3%;
    margin-top: 2%;
  }
}

</style>
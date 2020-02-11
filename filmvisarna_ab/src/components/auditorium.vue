<template>
  <div>
    <div class="row" v-for="(row, i) in seatsInAuditorium" :key="row + i">
      <div class="col s1" v-for="(seat, j) in row" :key="seat + j">
        {{seat.isAvailable}}
      </div>
    </div>



  </div>
  
</template>

<script>

export default {
  components:{
    
  },
  props:[
    'screening'
  ],
  data(){
    return{
      
    }
  },
  computed:{
    seatsInAuditorium(){
      let seats = this.screening.seats
      return seats;
    },
  },
  created(){
    
    if(this.screening.seats.length === 0){

      for(let row = 0; row < this.screening.auditorium.seatsPerRow.length; row++) {
        this.screening.seats[row] = {}
        for(let col = 0; col < this.screening.auditorium.seatsPerRow[row]; col++) {
           let seat = {
              x: col,
              y: row, 
              isAvailable: true
            }
          this.screening.seats[row][col]=seat; 
        }
      }  
    }
  }
}
</script>

<style>

</style>
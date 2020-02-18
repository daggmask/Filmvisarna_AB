<template>
<div class="main container col center-block center-align">
    <div class = "card light-blue darken-4 flow-text center-block center-align" >
    <div class="card-image" v-for="(movie,i) in movies" :key="movie + i">
        <img class="movie-poster responsive-img center-align center-block" :src="movie.images[0]" v-if="movie.title==booking.screeningTitle">
    </div>
    <div class="row">
        <h5 class="col s12 title">Tack för din bokning!</h5>
        <p class="col s12">{{booking.screeningTitle}} - {{booking.screeningTime}}</p>
        <p class="col s12"> {{booking.screeningDate}} </p>
    </div>
    <div class="row">
        <p class="col s12">Bokningsnummer : {{booking.customerBookingReferenceNumber}}</p>
        <p class="col s12" v-if="booking.regularTickets != 0">Standardbiljetter : {{booking.regularTickets}}</p>
        <p class="col s12" v-if="booking.childTickets != 0">Barnbiljetter : {{booking.childTickets}}</p>
        <p class="col s12" v-if="booking.seniorCitizenTickets != 0">Pensionärbiljetter : {{booking.seniorCitizenTickets}}</p>
        <p class="col s12">Email: {{booking.account}}</p>
    </div>
    <div class="row">
        <p>Platser:</p>
         <ul>
                <p v-for="(seat, i) in booking.bookedSeats" :key="seat + i">
                Rad: {{ seat.y + 1 }} Plats: {{ seat.x + 1 }}
              </p>
        </ul>
        <p class="col s12">Pris: {{booking.totalPriceForPurchase}}kr</p>
    </div>
    </div>
    
    
</div>
</template>

<script>
export default {
    computed: {
        booking() {
            return this.$store.state.booking;
        },
        movies(){
            return this.$store.state.movies;

        },
       
       
    },
    data() {
        return {
            show: false,
        };
    },
    methods:{
        //  getMoviePoster(){
        //  this.movies.forEach((movie) => {
        //  if(movie.title==this.booking.screeningTitle){
        //     let movieImg=movie.images[0]
        //     console.log(movieImg)
        //     return movieImg;

        //     }
        //     });
        // return null;

        // }
         
     
    }
};
</script>

<style scoped>


@media screen and (min-width: 1200px) {
  div .main .card{
      height: auto!important;
      width: 25vw!important;
  }
  img{
      height: auto!important;
      width: auto!important;
  }
}

</style>

<template>
  <div class="main  row light-blue darken-4 flow-text">

    <div class="col s12 m6 l6 xl6">
      <div class="card-image" v-for="(movie, i) in movies" :key="movie + i">
        <img
          class="movie-poster responsive-img"
          :src="movie.images[0]"
          v-if="movie.title == booking.screeningTitle"
        />
      </div>
    </div>

    <div class="col s12 m6 l6 xl6">
      <h5 class="title">Tack för din bokning!</h5>
      <p class="">{{ booking.screeningTitle }} - {{ booking.screeningTime }}</p>
      <p class="">{{ booking.screeningDate }}</p>

      <p class="">
        Bokningsnummer : {{ booking.customerBookingReferenceNumber }}
      </p>
      <p class="" v-if="booking.regularTickets != 0">
        Standardbiljetter : {{ booking.regularTickets }}
      </p>
      <p class="" v-if="booking.childTickets != 0">
        Barnbiljetter : {{ booking.childTickets }}
      </p>
      <p class="" v-if="booking.seniorCitizenTickets != 0">
        Pensionärbiljetter : {{ booking.seniorCitizenTickets }}
      </p>
      <p class="">Email: {{ booking.account }}</p>

      <p>Platser:</p>
      <ul>
        <p v-for="(seat, i) in booking.bookedSeats" :key="seat + i">
          Rad: {{ seat.y + 1 }} Plats: {{ seat.x + 1 }}
        </p>
      </ul>
      <p class="col s12">Pris: {{ booking.totalPriceForPurchase }}kr</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    booking() {
      return this.$store.state.booking;
    },
    movies() {
      return this.$store.state.movies;
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
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
  div .main .card {
    height: auto !important;
    width: 25vw !important;
  }
  img {
    height: auto !important;
    width: auto !important;
  }
}
</style>

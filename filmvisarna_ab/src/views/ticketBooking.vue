<template>
  <div class="container col main">
    <div class="container" id="movieAndDateInfo">
      <p class="movieTitle container">{{movie.title}}</p>
      <div class="apointmentInfo container">
        <p class="apointment">Datum: 20/20 - 2020</p>
        <p class="apointment">Tid: 00:00</p>
      </div>
    </div>
    <div class="ticketOptions">
      <div class="container ticketOptionRow">
        <div class="typeOfTicket">
          <p class="typeOfTicket">Ordinarie</p>
          <p class="ticketPrice">125kr/st</p>
        </div>
        <div class="container buttonRow">
          <button class="btn buttonColor container" @click="deductRegularTicket()">-</button>
          {{this.numberOfRegularTickets}}
          <button
            class="btn buttonColor container"
            @click="addRegularTicket()"
          >+</button>
        </div>
      </div>
      <div class="container ticketOptionRow">
        <div class="typeOfTicket">
          <p class="typeOfTicket">Barn(Under 12 år)</p>
          <p class="ticketPrice">110kr/st</p>
        </div>
        <div class="container buttonRow">
          <button class="btn buttonColor container" @click="deductChildTicket()">-</button>
          {{this.numberOfChildTickets}}
          <button
            class="btn buttonColor container"
            @click="addChildTicket()"
          >+</button>
        </div>
      </div>
      <div class="container ticketOptionRow">
        <div class="typeOfTicket">
          <p class="typeOfTicket">Pensionär</p>
          <p class="ticketPrice">100kr/st</p>
        </div>
        <div class="container buttonRow">
          <div class="btn buttonColor container" @click="deductSeniorCitizenTicket()">-</div>
          {{this.numberSeniorCitizenTickets}}
          <button
            class="btn buttonColor container filmvisarnaBlue"
            @click="addSeniorCitizenTicket()"
          >+</button>
        </div>
      </div>
    </div>
    <div class="payment">Pris: {{this.totalPrice}}kr</div>
    <button class="btn-large filmvisarnaBlue" @click="proceedAndChooseSeats">Välj platser</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOfRegularTickets: 0,
      numberSeniorCitizenTickets: 0,
      numberOfChildTickets: 0,
      totalPrice: 0
    };
  },
  
  computed: {
  movie() {
    let movies = this.$store.state.movies;
    for(let movie of movies){
      if(movie.movieId === this.$route.params.movie ){
        return movie;
      }
    }
    //return this.$store.state.movies[this.$route.params.movie];
    return null;
  }
},
    created(){
      this.$store.dispatch("getMovies")
    },
  methods: {
    addRegularTicket() {
      this.numberOfRegularTickets++;
      this.totalPrice += 125;
    },
    deductRegularTicket() {
      if (this.numberOfRegularTickets != 0) {
        this.numberOfRegularTickets--;
        this.totalPrice -= 125;
      }
    },
    addSeniorCitizenTicket() {
      this.numberSeniorCitizenTickets++;
      this.totalPrice += 100;
    },
    deductSeniorCitizenTicket() {
      if (this.numberSeniorCitizenTickets != 0) {
        this.totalPrice -= 100;
        this.numberSeniorCitizenTickets--;
      }
    },
    addChildTicket() {
      this.numberOfChildTickets++;
      this.totalPrice += 110;
    },
    deductChildTicket() {
      if (this.numberOfChildTickets != 0) {
        this.totalPrice -= 110;
        this.numberOfChildTickets--;
      }
    },
    proceedAndChooseSeats() {
      if (this.totalPrice != 0) {
        console.log(
          "Number of seats to place: " +
            (this.numberOfRegularTickets +
              this.numberOfChildTickets +
              this.numberSeniorCitizenTickets)
        );
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
#movieAndDateInfo {
  flex-direction: column;
  width: 20em;
}
.apointmentInfo {
  justify-content: space-between;
}
.movieTitle {
  margin-top: 0.1em;
  margin-bottom: 0.5em;
}
.ticketOptions {
  height: 14em;
  margin: 2em;
}
.payment {
  align-self: center;
}
.ticketOptionRow {
  flex-direction: row;
  justify-content: space-between;
  height: 5em;
  width: 25em;
}
.btn {
  height: 2em;
  width: 2em;
  justify-content: center;
  align-content: center;
  background-color: rgb(7, 8, 95);
  border-radius: 200;
}
.ticketChoice {
  width: 10em;
}
.typeOfTicket {
  width: 10em;
}
.buttonRow {
  width: 12.5em;
}
.btn-large {
  width: 12.5em;
  align-self: center;
  margin: 4em;
  background-color: rgb(7, 8, 95);
}
</style>

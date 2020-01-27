<template>
  <div class="container col main main">
    <div class="container" id="movieAndDateInfo">
      <p class="movieTitle container">{{ screening.film }}</p>
      <div class="apointmentInfo container">
        <p class="apointment">Datum: {{ getDateAsString(screening.time)}}</p>
        <p class="apointment">Tid: {{ getScreeningTime(screening.time) }}</p>
      </div>
    </div>
    <div class="ticketOptions">
      <div class="container ticketOptionRow">
        <div class="typeOfTicket">
          <p class="typeOfTicket">Ordinarie</p>
          <p class="ticketPrice">125kr/st</p>
        </div>
        <div class="container buttonRow">
          <button
            class="btn buttonColor container"
            @click="deductRegularTicket()"
          >
            -
          </button>
          {{ this.numberOfRegularTickets }}
          <button class="btn buttonColor container" @click="addRegularTicket()">
            +
          </button>
        </div>
      </div>
      <div class="container ticketOptionRow">
        <div class="typeOfTicket">
          <p class="typeOfTicket">Barn(Under 12 år)</p>
          <p class="ticketPrice">110kr/st</p>
        </div>
        <div class="container buttonRow">
          <button
            class="btn buttonColor container"
            @click="deductChildTicket()"
          >
            -
          </button>
          {{ this.numberOfChildTickets }}
          <button class="btn buttonColor container" @click="addChildTicket()">
            +
          </button>
        </div>
      </div>
      <div class="container ticketOptionRow">
        <div class="typeOfTicket">
          <p class="typeOfTicket">Pensionär</p>
          <p class="ticketPrice">100kr/st</p>
        </div>
        <div class="container buttonRow">
          <button
            class="btn buttonColor container filmvisarnaBlue"
            @click="deductSeniorCitizenTicket()"
          >
            -
            </button>
          {{ this.numberSeniorCitizenTickets }}
          <button
            class="btn buttonColor container filmvisarnaBlue"
            @click="addSeniorCitizenTicket()"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <div class="payment">Pris: {{ this.totalPrice }}kr</div>
    <button class="btn-large filmvisarnaBlue" @click="proceedAndChooseSeats">
      Välj platser
    </button>
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
    screening() {
      let screenings = this.$store.state.screenings;
      for (let screening of screenings) {
        if (screening.id === this.$route.params.screening) {
          return screening;
        }
      }
      return null;
    }
  },
  created() {
    this.$store.dispatch("getMovies");
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
    },
    getScreeningTime(timestamp){
      let screeningDate = timestamp.toDate();
      let screeningTime = `${screeningDate.getHours()}:${this.getMinutesAsString(screeningDate.getMinutes())}`;
      return screeningTime;      
    },
    getDateAsString(timestamp){
      let date = timestamp.toDate();
      return `${date.getDate()} ${this.getMonthName(date.getMonth())} ${date.getFullYear()}`
    },
    getMonthName(monthNumber){
      switch(monthNumber) {
        case 0:
          return "januari";
        case 1:
          return "februari";
        case 2:
          return "mars";
        case 3:
          return "april";
        case 4:
          return "maj";
        case 5:
          return "juni";
        case 6:
          return "juli";
        case 7:
          return "augusti";
        case 8:
          return "september";
        case 9:
          return "oktober";
        case 10:
          return "november";
        case 11:
          return "december";
      }
    },
    getMinutesAsString(minuteNumber){
      if(minuteNumber < 10) {
        return "0" + minuteNumber
      }
      return minuteNumber;
    }
  }
};
</script>

<style scoped>
.main {
  width: 100vw;
}
.container {
  display: flex;
}
#movieAndDateInfo {
  flex-direction: column;
  width: 60%;
}
.apointmentInfo {
  justify-content: space-between;
}
.movieTitle {
  margin-top: 5%;
  margin-bottom: 5%;
}
.ticketOptions {
  height: 27vh;
  margin: 5%;
}
.payment {
  align-self: center;
}
.ticketOptionRow {
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
  width: 75vw;
}
.btn {
  height: 5.5vh;
  width: 5.5vw;
  justify-content: center;
  align-content: center;
  background-color: rgb(7, 8, 95);
}
.ticketChoice {
  width: 10em;
}
.typeOfTicket {
  width: 100%;
}
.buttonRow {
  width: 100%;
  height: 5.5vh;
  align-items: center;
}
.btn-large {
  width: 50vw;
  align-self: center;
  margin: 10%;
  background-color: rgb(7, 8, 95);
}
.payment{
  margin-top: 10.5vh;
}
</style>

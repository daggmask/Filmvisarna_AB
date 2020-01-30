<template>
  <div class="main container">
    <div class="row options">
      <p class="screeningInfo col s6 m6 l6 xl6">{{ screening.film }}</p>
      <p class="screeningInfo col s6 m6 l6 xl6 right-align">
        Platser kvar: {{ screening.seatsAvailable }}
      </p>
      <p class="timeOfScreening col s6 m6 l6 xl6">
        {{ getScreeningTime(screening.time) }}
      </p>
      <p class="dayOfScreening col s6 m6 l6 xl6 right-align">
        {{ getDateAsString(screening.time) }}
      </p>
    </div>
    <div class="row">
      <div class="ticketInfo col s6">
        <p>Ordinarie</p>
        <p>125kr / st</p>
      </div>
      <div class="col s6 ticketOption container">
        <button
          class="btn-small indigo darken-4"
          @click="deductRegularTicket()"
        >
          -
        </button>
        <p class="ticketAmount">{{ this.numberOfRegularTickets }}</p>
        <button class="btn-small indigo darken-4" @click="addRegularTicket()">
          +
        </button>
      </div>
    </div>
    <div class="row">
      <div class="ticketInfo col s6">
        <p>Barn under 12år</p>
        <p>115kr / st</p>
      </div>
      <div class="col s6 ticketOption container">
        <button class="btn-small indigo darken-4" @click="deductChildTicket()">
          -
        </button>
        <p class="ticketAmount">{{ this.numberOfChildTickets }}</p>
        <button class="btn-small indigo darken-4" @click="addChildTicket">
          +
        </button>
      </div>
    </div>
    <div class="row">
      <div class="ticketInfo col s6">
        <p>Ordinarie</p>
        <p>125kr / st</p>
      </div>
      <div class="col s6 ticketOption container">
        <button
          class="btn-small indigo darken-4"
          @click="deductSeniorCitizenTicket()"
        >
          -
        </button>
        <p class="ticketAmount">{{ this.numberSeniorCitizenTickets }}</p>
        <button
          class="btn-small indigo darken-4"
          @click="addSeniorCitizenTicket()"
        >
          +
        </button>
      </div>
    </div>
    <div class="row checkOut">
      <div class="col container s12">
        <p
          class="red-text center"
          v-if="
            this.numberOfRegularTickets <= 0 &&
              this.numberOfChildTickets <= 0 &&
              this.numberSeniorCitizenTickets <= 0
          "
        >
          Du måste välja minst 1 biljett
        </p>
        <button
          @click="bookTickets()"
          class="btn-large indigo darken-4"
          v-if="
            this.numberOfRegularTickets >= 1 ||
              this.numberOfChildTickets >= 1 ||
              this.numberSeniorCitizenTickets >= 1
          "
        >
          Boka platser
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOfRegularTickets: 2,
      numberSeniorCitizenTickets: 0,
      numberOfChildTickets: 0,
      totalPrice: 125
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
    },
    deductRegularTicket() {
      if (this.numberOfRegularTickets != 0) {
        this.numberOfRegularTickets--;
      }
    },
    addSeniorCitizenTicket() {
      this.numberSeniorCitizenTickets++;
    },
    deductSeniorCitizenTicket() {
      if (this.numberSeniorCitizenTickets != 0) {
        this.numberSeniorCitizenTickets--;
      }
    },
    addChildTicket() {
      this.numberOfChildTickets++;
    },
    deductChildTicket() {
      if (this.numberOfChildTickets != 0) {
        this.totalPrice -= 110;
        this.numberOfChildTickets--;
      }
    },
    bookTickets() {},
    getScreeningTime(timestamp) {
      let screeningDate = timestamp.toDate();
      let screeningTime = `${this.getHoursAsString(
        screeningDate.getHours()
      )}:${this.getMinutesAsString(screeningDate.getMinutes())}`;
      return screeningTime;
    },
    getDateAsString(timestamp) {
      let date = timestamp.toDate();
      return `${date.getDate()} ${this.getMonthName(
        date.getMonth()
      )} ${date.getFullYear()}`;
    },
    getMonthName(monthNumber) {
      switch (monthNumber) {
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
    getMinutesAsString(minuteNumber) {
      if (minuteNumber < 10) {
        return "0" + minuteNumber;
      }
      return minuteNumber;
    },
    getHoursAsString(hourNumber) {
      if (hourNumber < 10) {
        return "0" + hourNumber;
      }
      return hourNumber;
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.ticketOption {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.warning {
  font-size: 1.25em;
  color: red;
}
.options {
  margin-top: 10%;
}
.checkOut {
  margin-top: 30%;
}
@media screen and (min-width: 768px) {
  .main{
    width: 60%;
    font-size: 1.5em;
  }
  .btn-small{
    height: 5vh;
    width: 2.5vw;
  }
}
</style>

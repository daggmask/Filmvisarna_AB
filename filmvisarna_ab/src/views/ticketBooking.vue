<template>
  <div class="container col main">
    <div class="container" id="movieAndDateInfo">
      <p class="movieTitle container">Movie the movie</p>
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
          <button class="btn buttonColor container" @click="deductAdultTest()">-</button>
          {{this.numberOfAdult}}
          <button
            class="btn buttonColor container"
            @click="addAdultTest()"
          >+</button>
        </div>
      </div>
      <div class="container ticketOptionRow">
        <div class="typeOfTicket">
          <p class="typeOfTicket">Barn(Under 12 år)</p>
          <p class="ticketPrice">110kr/st</p>
        </div>
        <div class="container buttonRow">
          <button class="btn buttonColor container" @click="deductChildTest()">-</button>
          {{this.numberOfAdult}}
          <button
            class="btn buttonColor container"
            @click="addChildTest()"
          >+</button>
        </div>
      </div>
      <div class="container ticketOptionRow">
        <div class="typeOfTicket">
          <p class="typeOfTicket">Pensionär</p>
          <p class="ticketPrice">100kr/st</p>
        </div>
        <div class="container buttonRow">
          <div class="btn buttonColor container" @click="deductOldsTest()">-</div>
          {{this.numberOfAdult}}
          <button
            class="btn buttonColor container filmvisarnaBlue"
            @click="addOldsTest()"
          >+</button>
        </div>
      </div>
    </div>
    <div class="payment">Summa: $$$</div>
    <button class="btn-large filmvisarnaBlue">Välj platser</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOfAdult: 2,
      numberOfOlds: 0,
      numberOfChilder: 0
    };
  },
  methods: {
    addAdultTest() {
      this.numberOfAdult++;
    },
    deductAdultTest() {
      if (this.numberOfAdult != 0) {
        this.numberOfAdult--;
      }
    },
    addOldsTest() {
      this.numberOfOlds++;
    },
    deductOldsTest() {
      if (this.numberOfOlds != 0) {
        this.numberOfOlds - 1;
      }
    },
    addChildTest() {
      this.numberOfChilder++;
    },
    deductChildTest() {
      if (this.numberOfChilder != 0) {
        this.numberOfChilder - 1;
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

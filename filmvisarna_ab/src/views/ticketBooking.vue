<template>
  <div class="container col main">
    <ticketOptions />
  </div>
</template>

<script>
import ticketOptions from '@/components/ticketOptions.vue'
export default {
components: {
  ticketOptions,
}
};
</script>

<style>
.main {
  width: 100vw;
  align-items: center;
}
.container {
  display: flex;
}
#movieAndDateInfo {
  flex-direction: column;
  width: 75vw;
  margin:0%;
}
.apointmentInfo {
  justify-content: space-between;
  width: 100%vw;
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

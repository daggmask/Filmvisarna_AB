<template>
  <div class="main container">
    <div class="row bookingInformation">
      <h6 class="col s12 title">Tack för din bokning!</h6>
      <h6 class="col s12">Bokningsinformation: </h6>
      <p class="col s12">Standardbiljetter : {{booking.regularTickets}}</p>
      <p class="col s12">Barnbiljetter : {{booking.childTickets}}</p>
      <p class="col s12">Pensionärbiljetter : {{booking.seniorcitizenTickets}}</p>
      <p class="col s12">Bokningsnummber: {{booking.screeningID.substring(0,6)}}</p>
      <p class="col s12">Pris: {{booking.totalPriceForPurchase}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    booking() {
      return this.$store.state.booking;
    }
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
.main{
  justify-content: center;
}
.bookingInformation{
  width: 100%;
  height: 50vh;
  margin-top: 25%;
}
p{
  font-size: 1.5em;
}
h6{
  font-size: 1.75em;
  margin-bottom: 10%;
}
</style>
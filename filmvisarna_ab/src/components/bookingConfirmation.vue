<template>
  <div class="main container">
    <div class="row">
      <h6 class="col s12 title">Tack för din bokning!</h6>
      <p class="col s12">{{booking.screeningTitle}}</p>
      <p class="col s12">{{booking.screeningDate}}</p>
      <p class="col s12">{{booking.screeningTime}}</p>
    </div>
    <div class="row">
      <h6 class="col s12">Bokningsnummer : {{booking.screeningID.substring(0,5)}}</h6>
      <p class="col s12">Standardbiljetter : {{booking.regularTickets}}</p>
      <p class="col s12">Barnbiljetter : {{booking.childTickets}}</p>
      <p class="col s12">Pensionärbiljetter : {{booking.seniorcitizenTickets}}</p>
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
  flex-direction: column;
  padding-top: 15%;

}
p{
  font-size: 1.5em;
}
h6{
  font-size: 1.35rem;
}
</style>
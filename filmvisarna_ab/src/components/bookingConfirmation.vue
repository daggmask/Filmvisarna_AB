<template>
  <div class="main container">
    <div class="row">
      <h6 class="col s12 title">Tack för din bokning!</h6>
      <p class="col s12">{{booking.screeningTitle}} - {{booking.screeningTime}}</p>
      <p class="col s12"> {{booking.screeningDate}} </p>
    </div>
    <div class="row">
      <h6 class="col s12">Bokningsnummer : {{booking.customerBookingReferenceNumber}}</h6>
      <p class="col s12" v-if="booking.regularTickets != 0">Standardbiljetter : {{booking.regularTickets}}</p>
      <p class="col s12" v-if="booking.childTickets != 0">Barnbiljetter : {{booking.childTickets}}</p>
      <p class="col s12" v-if="booking.seniorCitizenTickets != 0">Pensionärbiljetter : {{booking.seniorCitizenTickets}}</p>
      <p class="col s12">Pris: {{booking.totalPriceForPurchase}}kr</p>
      <p class="col s12">Email: {{booking.account}}</p>
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
<template>
  <div class="main container">
    <div class="row">
      <p class="col s12">Standardbiljetter : {{booking.regularTickets}}</p>
      <p class="col s12">Barnbiljetter : {{booking.childTickets}}</p>
      <p class="col s12">Pensionärbiljetter : {{booking.seniorcitizenTickets}}</p>
      <p class="col s12">Pris: {{booking.totalPriceForPurchase}}</p>
      <p class="col s12">Bokningsnummber: {{booking.screeningID}}</p>
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
.main {
  height: 10vh;
  width: 100%;
}
</style>
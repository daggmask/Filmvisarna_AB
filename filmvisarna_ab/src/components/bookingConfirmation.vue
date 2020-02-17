<template>
<div class="main container col center">
    <div class = "card blue darken-3">
    <div class="row">
        <h5 class="col s12 title">Tack för din bokning!</h5>
        <p class="col s12">{{booking.screeningTitle}} - {{booking.screeningTime}}</p>
        <p class="col s12"> {{booking.screeningDate}} </p>
    </div>
    <div class="row">
        <p class="col s12">Bokningsnummer : {{booking.customerBookingReferenceNumber}}</p>
        <p class="col s12" v-if="booking.regularTickets != 0">Standardbiljetter : {{booking.regularTickets}}</p>
        <p class="col s12" v-if="booking.childTickets != 0">Barnbiljetter : {{booking.childTickets}}</p>
        <p class="col s12" v-if="booking.seniorCitizenTickets != 0">Pensionärbiljetter : {{booking.seniorCitizenTickets}}</p>
        <p class="col s12">Pris: {{booking.totalPriceForPurchase}}kr</p>
        <p class="col s12">Email: {{booking.account}}</p>
    </div>
    </div>
    <button type="submit" class="btn light-blue darken-4 waves-light">hem</button>
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
.card {
  border-radius: 15%;

}
.main {
    padding-top: 15%;

}

p {
    font-size: 1.5em;
}

</style>

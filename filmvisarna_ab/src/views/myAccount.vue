<template>
<div>
<div class="header container center-block">
    <h4 class="center-block" v-if="user.loggedIn" @click="logBookings">{{user.data.displayName}}s konto</h4>
    <h4 class="center-block" v-if="!user.loggedIn"><em>Anonym</em></h4>
    </div>
    <div class="row">
        <h5 class="center-block center-align">Bokade filmer:</h5>
    <div class="card-container s12 m4 col " 
    v-for="(booking, i) in bookings"
     :key="booking + i"
     v-show="booking.account === user.data.email">     
      <div class="card blue darken-3">
          <span class="card-title center-block center-align">{{booking.screeningTitle}}</span>
        <div class="card-content">
          <ul>
              <li>Datum: {{booking.screeningDate}}</li>
              <li>Tid: {{booking.screeningTime}}</li>
              <li>Antal biljetter: {{booking.regularTickets + booking.childTickets + booking.seniorCitizenTickets}}</li>
              <li>Pris: {{booking.totalPriceForPurchase}}kr</li>
              <li>boknings id: {{booking.screeningID}}</li>
          </ul>
  </div>
  </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
   computed: {
    user(){
      return this.$store.state.user
    },
    bookings(){
       return this.$store.state.bookings
    }
  },
  methods:{
      logBookings(){
        let email = this.user.data.email
        let emailAccountName = this.bookings.map((accountName) => {
          return accountName.account
        })
      }
  },
    created() {
    this.$store.dispatch("getBookings");
  },
}
</script>

<style>
.card{
    border-radius: 5%;
}
.bookingsList{
    width: 25vw !important;
}
.bookings{
    width: 25vw !important;
}
</style>
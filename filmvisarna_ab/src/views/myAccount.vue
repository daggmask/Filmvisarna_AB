<template>
<div class="container center-block s4 m4 l4 col">
    <h4 class="center-block" v-if="user.loggedIn" @click="logBookings">{{user.data.displayName}}</h4>
    <h4 class="center-block" v-if="!user.loggedIn">Hej anonym</h4>
    <div class="col s4 m4 l4">
    <div class="bookings" v-for="(booking, i) in bookings" :key="booking + i">     
    <div class="row s4 m4 l4 x4 bookingsList">
    <div class="col">
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
          console.log(this.$store.state.bookings)
          console.log(email)
          console.log(emailAccountName)

          if(email==emailAccountName){
            
          }
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
</style>
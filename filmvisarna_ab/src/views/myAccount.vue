<template>
<div class="container center-block s12 m12 l12">
    <h4 class="center-block" v-if="user.loggedIn" @click="logBookings">{{user.data.displayName}}</h4>
    <h4 class="center-block" v-if="!user.loggedIn">Hej anonym</h4>
    <div class="col s12 m12 l12">
    <div class="bookings" v-for="(booking, i) in bookings" :key="booking + i">     
    <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg">
          <span class="card-title">booking.screeningTitle</span>
        </div>
        <div class="card-content">
          <ul>
              <li>booking.screeningDate</li>
              <li>booking.screeningID</li>
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
       return this.$store.dispatch("getBookings");
    }
  },
  methods:{
      logBookings(){
          console.log(this.bookings)
      }
  }
}
</script>

<style>

</style>
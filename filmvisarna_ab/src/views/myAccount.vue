<template>
<div class="container center-block s12 m12 l12">
    <h4 class="center-block" v-if="user.loggedIn">{{user.data.displayName}}</h4>
    <h4 class="center-block" v-if="!user.loggedIn">Hej anonym</h4>
    <div class="col s12 m12 l12">
    <div class="upcomingBookings">

    </div>
    <div class="pastBookings">

    </div>
    </div>
</div>
</template>

<script>
export default {
   computed: {
    user(){
      return this.$store.state.user
    }
  },
}
</script>

<style>

</style>
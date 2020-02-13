<template>
  <div class="container col main">
    <ticketOptions @displayConfirmation="displayConfirmation()" v-if="!showConfirmation"/>
    <bookingConfirmation v-if="showConfirmation" />
  </div>
</template>

<script>
import ticketOptions from "@/components/ticketOptions.vue";
import bookingConfirmation from "@/components/bookingConfirmation.vue";
export default {
  components: {
    ticketOptions,
    bookingConfirmation
  },
  data() {
    return {
      showConfirmation: false
    };
  },
  methods:{
    displayConfirmation(){
      this.showConfirmation = true;
    }
  }
};
</script>

<style scoped>

</style>

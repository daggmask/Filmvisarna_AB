<template>
  <div class="container col main">
    <ticketOptions @toAuditorium="showTicketOptions=!showTicketOptions,showAuditorium=!showAuditorium" v-if="showTicketOptions"/>
    <auditorium v-if="showAuditorium" @toConfirmation="displayConfirmation(),showAuditorium=!showAuditorium"></auditorium>
    <bookingConfirmation v-if="showConfirmation" />
  </div>
</template>

<script>
import auditorium from '@/components/auditorium.vue'
import ticketOptions from "@/components/ticketOptions.vue";
import bookingConfirmation from "@/components/bookingConfirmation.vue";
export default {
  components: {
    auditorium,
    ticketOptions,
    bookingConfirmation
  },
  data() {
    return {
      showConfirmation: false,
      showTicketOptions: true
    };
  },
  methods:{
    displayConfirmation(){
      this.showConfirmation = true;
    },
    
  },
};
</script>

<style scoped>

</style>

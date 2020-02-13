<template>
  <div class="container col main">
    <ticketOptions @toAuditorium="showTicketOptions=!showTicketOptions,showAuditorium=!showAuditorium" v-if="showTicketOptions"/>
    <auditorium v-if="showAuditorium"></auditorium>
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
    }
  },
  computed: {
    screening() {
      let screenings = this.$store.state.screenings;
      let movieScreening;
      for (let screening of screenings) {
        if (screening.id === this.$route.params.screening) {
          movieScreening = screening;
        }
      }
      return movieScreening;
    }
  },
};
</script>

<style scoped>

</style>

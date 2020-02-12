<template>
  <div class="container col main">
    <ticketOptions @displayConfirmation="displayConfirmation()" v-if="!showConfirmation"/>
    <auditorium></auditorium>
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
      showConfirmation: false
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

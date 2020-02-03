<template>
  <div>
    <a href="#" class="dropdown-trigger btn light-blue darken-4" data-target="drop-down-menu">Välj datum</a>
    <ul id="drop-down-menu" class="dropdown-content">
      <li v-for="(date, i) of datesAsString" :key="date+i">{{date}}</li>

    </ul>
  </div>
</template>

<script>
export default {
    mounted(){
        this.$M.AutoInit()
    
    },
    computed:{
      dates(){

        let screenings = this.$store.state.screenings;
        let dates = [];
        let timeNow = new Date();
        for(let screening of screenings){
          if(screening.time.toDate() > timeNow){
            dates.push(screening.time.toDate());
          }
        }
        console.log(dates);
        dates.sort( function(a,b){
          return a-b;
        });
        return dates;
      },
      datesAsString(){

        let newDates = [];
        let dates = this.dates;
        for(let date of dates){
         
          newDates.push(this.getDateAsString(date));
        }
        newDates = Array.from(new Set(newDates));
        return newDates;
      }
    },
    created(){
      this.$store.dispatch("getScreenings")
  },
  methods:{

    

    getDateAsString(date){
      
      return `${date.getDate()} ${this.getMonthName(date.getMonth())} ${date.getFullYear()}`
    },
  
    getMonthName(monthNumber){
      switch(monthNumber) {
        case 0:
          return "januari";
        case 1:
          return "februari";
        case 2:
          return "mars";
        case 3:
          return "april";
        case 4:
          return "maj";
        case 5:
          return "juni";
        case 6:
          return "juli";
        case 7:
          return "augusti";
        case 8:
          return "september";
        case 9:
          return "oktober";
        case 10:
          return "november";
        case 11:
          return "december";
      }
    },
  }
}
</script>

<style>

</style>
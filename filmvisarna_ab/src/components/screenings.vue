<template>
<div class="col">
    <div class="row small-margin">
        <a href="javascript:void(0)"
        class="dropdown-trigger btn light-blue darken-4 col s12 m6 offset-m3 l4 offset-l4"
        data-target="dropdown-menu">
            {{ date }}
        </a>
        <ul class="dropdown-content" id="dropdown-menu">
            <li
            class="light-blue darken-2 dropDownContent valign-wrapper"
            :class="{firstDropdownContent: i === 0}"
            v-for="(date, i) in dates" :key="i+date"
            @click="setDate(date), screeningsAreShowing = true">
                {{ date }}
            </li>
        </ul>
    </div>

    <div class="row">
      <ul class="collection col s12 m6 offset-m3 xl4 offset-xl4"
      :class="{ hidden: !screeningsAreShowing }">
        <li class="collection-item col s12 light-blue darken-2"
        v-for="(screening, i) in screeningsOnSelectedDate"
        :key="i + screening">
        <router-link :to="'/tickets/' + screening.id">
          <div class="row screening-info valign-wrapper">
            <div class="col s4 m5 center-align">
              <h4>{{ getScreeningTime(screening.time) }}</h4>
            </div>
            <div class="auditorium-info col s8 m7">
              <h6>
                {{ screening.auditorium.name }}<br>
                Platser kvar: {{screening.seatsAvailable}}
              </h6>
            </div>
          </div>
        </router-link>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
export default {
    props: {
        movieTitle: String,
    },
    computed: {
        screenings() {
            let allScreenings = this.$store.state.screenings;
            let currentMovieScreenings = [];
            allScreenings.forEach(screening => {
                if (screening.film === this.movieTitle) {
                    currentMovieScreenings.push(screening);
                }
            })
            currentMovieScreenings.sort((a, b) => {
                return a.time.getTime() - b.time.getTime();
            })
            return currentMovieScreenings;
        },
        dates() {
            let dates = [];
            this.screenings.forEach(screening => {
                if (this.movieTitle === screening.film) {
                    let date = this.getDateAsString(screening.time);
                    dates.push(date);
                }
            })
            dates = Array.from(new Set(dates))
            return dates;
        },
        screeningsOnSelectedDate() {
            let screeningsOnSelectedDate = []
            this.screenings.forEach(screening => {
                if (this.getDateAsString(screening.time) === this.date) {
                    screeningsOnSelectedDate.push(screening);
                }
            })
            return screeningsOnSelectedDate;
        }
    },
    methods: {
        setDate(date) {
            this.date = date;
        },
        getScreeningTime(screeningDate) {
            let screeningTime = `${screeningDate.getHours()}:${this.getMinutesAsString(screeningDate.getMinutes())}`;
            return screeningTime;
        },
        getDateAsString(date) {
            return `${date.getDate()} ${this.getMonthName(date.getMonth()).toUpperCase()} ${date.getFullYear()}`
        },
        getMonthName(monthNumber) {
            let months = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]
            return months[monthNumber];
        },
        getMinutesAsString(minuteNumber) {
            if (minuteNumber < 10) {
                minuteNumber = '0' + minuteNumber;
            }
            return minuteNumber;
        },
        getHoursAsString(hourNumber) {
            if (hourNumber < 10) {
                return "0" + hourNumber;
            }
            return hourNumber;
        }
    },
    data() {
        return {
            date: 'Välj datum',
            isOpen: false,
            screeningsAreShowing: false,
        }
    },
    mounted() {
        let elems = document.querySelectorAll(".dropdown-trigger")
        this.$M.Dropdown.init(elems);
    }
}
</script>

<style scoped>
.btn{
    font-size: 1.5rem;
}
.firstDropdownContent{
    border-top: 1px solid white;
}
.dropDownContent{
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid white;
    justify-content: center;
    font-size: 1.5rem;
}
.small-margin {
    margin-bottom: 5px;
}
.hidden {
    border: 0px;
}
.screening-info {
    margin: 0;
}
.screening-time {
    text-align: center;
}
.collection {
    padding: 0;
}
</style>

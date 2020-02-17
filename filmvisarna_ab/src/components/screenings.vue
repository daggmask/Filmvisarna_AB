<template>
<div class="container col screenings">

    <div class="row small-margin">
        <a href="javascript:void(0)" class="btn-large light-blue darken-4 col s12 m6 offset-m3 xl4 offset-xl4" @click="isOpen = !isOpen">
            <h5>{{ date }}</h5>
        </a>
    </div>

    <div class="dates-div" v-if="isOpen">
        <div class="row small-margin" v-for="(date, i) in dates" :key="i + date">
            <a href="javascript:void(0)" class="btn-large light-blue darken-2 col s12 m6 offset-m3 xl4 offset-xl4" @click="setDate(date), isOpen = !isOpen, screeningsAreShowing = true">
                <h5>{{ date }}</h5>
            </a>
        </div>
    </div>

    <div class="row" v-if="!isOpen">
        <ul :class="{ hidden: !screeningsAreShowing }" class="collection col s12 m6 offset-m3 xl4 offset-xl4">
            <li class="collection-item col s12 light-blue darken-2" v-for="(screening, i) in screeningsOnSelectedDate" :key="i + screening">
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
            for (let screening of allScreenings) {
                if (screening.film === this.movieTitle) {
                    currentMovieScreenings.push(screening);
                }
            }
            currentMovieScreenings.sort((a, b) => {
                return a.time.getTime() - b.time.getTime();
            })
            return currentMovieScreenings;
        },
        dates() {
            let dates = [];
            for (let screening of this.screenings) {
                if (this.movieTitle === screening.film) {
                    let date = this.getDateAsString(screening.time);
                    dates.push(date);
                }
            }
            dates = Array.from(new Set(dates))
            return dates;
        },
        screeningsOnSelectedDate() {
            let screeningsOnSelectedDate = []
            for (let screening of this.screenings) {
                if (this.getDateAsString(screening.time) === this.date) {
                    screeningsOnSelectedDate.push(screening);
                }
            }
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
            return `${date.getDate()} ${this.getMonthName(date.getMonth())} ${date.getFullYear()}`
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
    created() {
        this.$store.dispatch("getScreenings");
    },
    data() {
        return {
            date: 'Välj datum',
            isOpen: false,
            screeningsAreShowing: false,
        }
    }
}
</script>

<style scoped>
.small-margin {
    margin-bottom: 5px;
}

.no-margin {
    margin-bottom: 0px;
}

.btn-large:hover {
    background-color: #0091ea !important;
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

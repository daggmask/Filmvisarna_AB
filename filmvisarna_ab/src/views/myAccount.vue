<template>
<div>
    <div class="header container center-block">
        <h4 class="center-block" v-if="user.loggedIn">{{user.data.displayName}}s konto</h4>
        <h4 class="center-block" v-if="!user.loggedIn">
            <em>Anonym</em>
        </h4>
    </div>
    <div class="row">
        <h5 class="center-block center-align">Bokade filmer:</h5>
        <div class="card-container s12 m4 col" v-for="(booking, i) in future" :key="booking + i" v-show="booking.account === user.data.email">
            <!-- Renders upcoming screenings -->
            <div class="card blue darken-3">
                <span class="card-title center-block center-align">{{booking.screeningTitle}}</span>
                <div class="card-content">
                    <ul>
                        <li>Datum: {{booking.screeningDate}}</li>
                        <li>Tid: {{booking.screeningTime}}</li>
                        <li>Antal biljetter: {{booking.regularTickets + booking.childTickets + booking.seniorCitizenTickets}}</li>
                        <li>Referens nummer: {{booking.customerBookingReferenceNumber}}</li>
                        <li v-for="seat in booking.seats" :key="seat">Rad: {{seat.y}}  Plats: {{seat.x}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <h5 class="center-block center-align">Tidigare bokningar:</h5>
        <div class="card-container s12 m4 col" v-for="(booking, i) in history" :key="booking + i" v-show="booking.account === user.data.email">
            <!-- Renders past bookings -->
            <div class="card blue darken-3">
                <span class="card-title center-block center-align">{{booking.screeningTitle}}</span>
                <div class="card-content">
                    <ul>
                        <li>Datum: {{booking.screeningDate}}</li>
                        <li>Tid: {{booking.screeningTime}}</li>
                        <li>Antal biljetter: {{booking.regularTickets + booking.childTickets + booking.seniorCitizenTickets}}</li>
                        <li>Referens nummer: {{booking.customerBookingReferenceNumber}}</li>
                        <li v-for="seat in booking.seats" :key="seat">Rad: {{seat.y}}  Plats: {{seat.x}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user;
        },
        bookings() {
            return this.$store.state.bookings;
        },
        history() {
            let allBookings = this.$store.state.bookings;
            let pastBookings = [];
            let today = new Date();
            allBookings.forEach(booking => {
                if (
                    //Past bookings from TODAY
                    today.getDate() == booking.time.getDate() &&
                    today.getMonth() == booking.time.getMonth() &&
                    today.getFullYear() == booking.time.getFullYear() &&
                    today.getHours() >= booking.time.getHours() &&
                    today.getMinutes() >= booking.time.getMinutes()
                ) {
                    pastBookings.push(booking);
                } else if (
                    //Past bookings from THIS YEAR
                    today.getDate() > booking.time.getDate() &&
                    today.getMonth() >= booking.time.getMonth() &&
                    today.getFullYear() >= booking.time.getFullYear()
                ) {
                    pastBookings.push(booking);
                } else if (today.getFullYear() > booking.time.getFullYear()) {
                    //Past bookings from EARLIER YAERS
                    pastBookings.push(booking);
                }
            });
            return pastBookings;
        },
        future() {
            let allBookings = this.$store.state.bookings;
            let pastBookings = [];
            let today = new Date();
            allBookings.forEach(booking => {
                //Booked screenings for TODAY ONLY
                if (
                    today.getDate() == booking.time.getDate() &&
                    today.getMonth() == booking.time.getMonth() &&
                    today.getFullYear() == booking.time.getFullYear() &&
                    today.getHours() <= booking.time.getHours() &&
                    today.getMinutes() < booking.time.getMinutes()
                ) {
                    pastBookings.push(booking);
                    //Booked screenings TOMORROW AND ONWARDS
                } else if (
                    today.getDate() + 1 <= booking.time.getDate() &&
                    today.getMonth() <= booking.time.getMonth() &&
                    today.getFullYear() <= booking.time.getFullYear()
                ) {
                    pastBookings.push(booking);
                }
            });
            return pastBookings;
        }
    },
    created() {
        this.$store.dispatch("getBookings");
    }
};
</script>

<style scoped>
.card {
    border-radius: 5%;
}

.card:hover {
    box-shadow: 0 0 10px white;
    background-image: white;
    z-index: 1;
}

.bookingsList {
    width: 25vw !important;
}

.bookings {
    width: 25vw !important;
}
</style>

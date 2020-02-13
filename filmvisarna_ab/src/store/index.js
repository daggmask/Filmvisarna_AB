import Vue from "vue";
import Vuex from "vuex";
import { db, auth } from "@/firebase.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberOfTickets: {},
    auditoriums: [],
    publishMovies: false,
    movies: [],
    screenings: [], 
    bookings: [], 
    movieFilter: '',         
    user: {
      loggedIn: false,
      data: null,
    },
    publishBooking: false,
    booking: Object
  },
  mutations: {
    movieShowing(state, value) {
      state.movieDisplay = value;
    },
    setMovies(state, data) {
      state.movies = data;
    },
    setBookings(state, data) {
      state.bookings = data;
    },
    setScreenings(state, data) {
      state.screenings = data;
    },
    publishMovies(state){
      state.publishMovies=true;
    },
    setMovieFilter(state, data){
      state.movieFilter = data;
    },
    setLoggedIn(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, data) {
      state.user.data = data;
    },
    publishBooking(state, data) {
      state.booking = data;
      state.publishBooking = true;
    },
    setAuditoriums(state, data){
      state.auditoriums = data;
    },
    setNumberOfTickets(state, data){
      state.numberOfTickets = data;
    },
  },
  actions: {
    async getBookings({commit}){
      let querySnapshot = await db.collection("bookings").get()
      let bookings = [];
      querySnapshot.forEach((booking) => {
        let data = booking.data();
        data.id = booking.id;
        bookings.push(data);
      })
      commit('setBookings', bookings)
     },
    async getMovies({commit}){
      let querySnapshot = await db.collection("movies").get()
      let movies = [];
      querySnapshot.forEach((movie) => {
        let data = movie.data();
        data.id = movie.id;
        movies.push(data);
      })
      commit('setMovies', movies)
     },
     async getScreenings({commit, dispatch}){
      let querySnapshot = await db.collection("screenings").get();
      let screenings = [];
      querySnapshot.forEach(screening => {
        let data = screening.data();
        data.id = screening.id;
        data.time = data.time.toDate();
        this.state.movies.forEach( movie =>{
          if(movie.id == data.movieId){
            screening.film = movie;
          }
        })
        this.state.auditoriums.forEach( auditorium => {
          if(auditorium.id == data.auditoriumId){
            data.auditorium = auditorium;
          }
        })
        if(data.seats.length === 0){
          for(let row = 0; row < data.auditorium.seatsPerRow.length; row++) {
            data.seats[row] = {}
            for(let col = 0; col < data.auditorium.seatsPerRow[row]; col++) {
              let seat = {
                  x: col,
                  y: row, 
                  isAvailable: true
                }
              data.seats[row][col]=seat; 
            }
          }
          dispatch("updateScreeningSeats", data)
        }
        data.seats.forEach(row => {
          row = Object.values(row);
          row.forEach(seat => {
            seat.isMarked = false;
          })
        })
        screenings.push(data);
      });
      commit("setScreenings", screenings);
    },
    async getAuditoriums({ commit }) {
      let querySnapshot = await db.collection("auditoriums").get();
      let auditoriums = [];
      querySnapshot.forEach(auditorium => {
        let data = auditorium.data();
        data.id = auditorium.id;
        auditoriums.push(data);
      });
      commit("setAuditoriums", auditoriums);
    },
    async publishMovies({ commit }) {
      let documents = require("@/data/movies.json");
      for (let document of documents) {
        let res = await db.collection("movies").add(document);
        console.log("publishmovies res" + res);
      }
      commit("publishMovies");
    },
    async updateScreeningSeats({commit}, payload){
      db.collection("screenings").doc(payload.id).update({seats: payload.seats})
    },
    async publishBooking({ commit }, payload) {
      //Screening update
      db.collection("screenings")
        .doc(payload.screeningID)
        .update({
          seatsAvailable: payload.seatsLeft
        });
      //Booking added to Bookings
      let booking = {
        childTickets: payload.childTickets,
        customerBookingReferenceNumber: payload.customerBookingReferenceNumber,
        regularTickets: payload.regularTickets,
        screeningDate: payload.screeningDate,
        screeningID: payload.screeningID,
        screeningTime: payload.screeningTime,
        screeningTitle: payload.screeningTitle,
        seniorCitizenTickets: payload.seniorCitizenTickets,
        totalPriceForPurchase: payload.totalPriceForPurchase,
        account: payload.account,
      };
      await db.collection("bookings").add(booking);
      commit("publishBooking", booking);
    },
    async createUser(user){
      console.log(user)
     await db.collection('accounts').add(user);
  },
    async registerUser({ commit },form){
     let data = await auth.createUserWithEmailAndPassword(form.email, form.password)
     let result = await data.user.updateProfile({displayName: form.name})
     if(result){
     this.dispatch('fetchUser', data.user)
    }
  },
    async loginUser({ commit }, form){
     try{
     let result = await auth.signInWithEmailAndPassword(form.email, form.password)
     if(result){
      this.dispatch('fetchUser', result.user)
    }
  }
    catch{
      console.log("fel användarnamn")
    }
  },
   fetchUser({ commit }, user) {
    commit("setLoggedIn", user !== null);

    if (user) {
      commit("setUser", {
        displayName: user.displayName,
        email: user.email,
      });
    } else {   
      commit("setUser", null);
    }
  }
  },
  modules: {}
});

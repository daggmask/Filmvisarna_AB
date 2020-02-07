import Vue from "vue";
import Vuex from "vuex";
import { db, auth } from "@/firebase.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    publishMovies: false,
    movies: [],
    screenings: [],
    user: {
      loggedIn: false,
      data: null
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
    setScreenings(state, data) {
      state.screenings = data;
    },
    publishMovies(state) {
      state.publishMovies = true;
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
    }
  },
  actions: {
    async getMovies({ commit }) {
      let querySnapshot = await db.collection("movies").get();
      let data = [];
      querySnapshot.forEach(document => {
        data.push(document.data());
      });
      commit("setMovies", data);
    },
    async getScreenings({ commit }) {
      let querySnapshot = await db.collection("screenings").get();
      let screenings = [];
      querySnapshot.forEach(screening => {
        let data = screening.data();
        data.id = screening.id;
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
      commit("setScreenings", auditoriums);
    },
    async publishMovies({ commit }) {
      let documents = require("@/data/movies.json");
      for (let document of documents) {
        let res = await db.collection("movies").add(document);
        console.log("publishmovies res" + res);
      }
      commit("publishMovies");
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
        seniorCitizenTickets: payload.seniorcitizenTickets,
        totalPriceForPurchase: payload.totalPriceForPurchase,
      };
      await db.collection("bookings").add(booking);
      commit("publishBooking", booking);
    },
    async createUser(user) {
      console.log(user);
      await db.collection("accounts").add(user);
    },
    async registerUser({ commit }, form) {
      let data = await auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      let result = await data.user.updateProfile({ displayName: form.name });
      if (result) {
        this.dispatch("fetchUser", data.user);
      }
    },
    async loginUser({ commit }, form) {
      let result = await auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );
      if (result) {
        this.dispatch("fetchUser", result.user);
      }
    },
    fetchUser({ commit }, user) {
      commit("setLoggedIn", user !== null);
      if (user) {
        commit("setUser", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("setUser", null);
      }
    }
  },
  modules: {}
});

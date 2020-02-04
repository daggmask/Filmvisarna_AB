import Vue from "vue";
import Vuex from "vuex";
import { db } from "@/firebase.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    publishMovies: false,
    movies: [],
    screenings: [],
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
      await db.collection("bookings").add(payload);
      commit("publishBooking", payload);
    }
  },
  modules: {}
});

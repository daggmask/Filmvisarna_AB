import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    screenings: [] ,           
  },
  mutations: {
    setMovies(state, data){
      state.movies = data
    },
    setScreenings(state, data){
      state.screenings = data;
    },
  },
  actions: {
    async getMovies({commit}){
      let querySnapshot = await db.collection("movies").get();
      let data = [];
      querySnapshot.forEach((document) => {
        data.push(document.data());
      })
      commit('setMovies', data);
     },
     async getScreenings({commit}){
      let querySnapshot = await db.collection("screenings").get();
      let screenings = [];
      querySnapshot.forEach(screening => {
        let data = screening.data();
        data.id = screening.id;
        screenings.push(data);
      })
      commit('setScreenings', screenings);
     },
  },
  modules: {
  }
})

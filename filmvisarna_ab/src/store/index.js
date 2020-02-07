import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    publishMovies: false,
    movies: [],
    screenings: [], 
    movieFilter: '',         
  },
  mutations: {
    movieShowing(state, value) {
      state.movieDisplay = value;
    },
    setMovies(state, data){
      state.movies = data
    },
    setScreenings(state, data){
      state.screenings = data;
    },
    publishMovies(state){
      state.publishMovies=true;
    },
    setMovieFilter(state, data){
      state.movieFilter = data;
    }
  },
  actions: {
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
     async getScreenings({commit}){
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
        screenings.push(data);
      })
      commit('setScreenings', screenings);
     },
     async publishMovies({commit}){
      let documents = require('@/data/movies.json')
      for(let document of documents){
       let res = await db.collection('movies').add(document)
       console.log('publishmovies res' + res)
      } 
      commit('publishMovies') 
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    publishMovies: false,
    movies:[],
                
              
            movieDisplay: Object,
            
  },
  mutations: {
    movieShowing(state, value) {
      state.movieDisplay = value;
      
    },
    setMovies(state, data){
      state.movies = data
      },

      publishMovies(state){
      state.publishMovies=true;
      }
  },
  actions: {
    async getMovies({commit}){
      let querySnapshot = await db.collection("movies").get();
      let movies = [];
      querySnapshot.forEach(movie => {
        let data = movie.data();
        data.id = movie.id;
        movies.push(data);

      });
      commit('setMovies', movies)
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

import Vue from 'vue'
import Vuex from 'vuex'
import {db, auth} from '@/firebase.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    publishMovies: false,
    movies: [],
    screenings: [] , 

    user: {
      loggedIn: false,
      data: null,
      isLoggedIn: false
    },
         
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
    setLoggedIn(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, data) {
      state.user.data = data;
    },

  },
  actions: {
    async getMovies({commit}){
      let querySnapshot = await db.collection("movies").get()
      let data = []
      querySnapshot.forEach((document) => {
        data.push(document.data())
      })
      commit('setMovies', data)
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
     async publishMovies({commit}){
      let documents = require('@/data/movies.json')
      for(let document of documents){
       let res = await db.collection('movies').add(document)
       console.log('publishmovies res' + res)
      } 
      commit('publishMovies') 
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
      console.log(result.user.displayName)
      console.log(result.user.email,result.user.password)
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
    
  },

},
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    publishMovies: false,
    movies:{
                // theGrinch: {
                //     url: 'theGrinch',
                //     title: 'The Grinch',
                //     genre: 'comedy',
                //     poster: 'https://cdn.cdon.com/media-dynamic/images/product/movie/dvd/image1/grinchen_nordic-34239133-frntl.jpg',
                //     trailer:'5o2lk20zHaw',
                //     length: '100',
                //     rating: '5',
                //     synopsis: `The Grinch is a bitter, grouchy, cave-dwelling creature who hates Christmas. He resides on the snowy Mount Crumpit, a steep high mountain just north of the town of Whoville, home of the merry and warm-hearted Whos. His heart has been "two sizes too small". His only companion is his unloved, but loyal dog, Max.`
                // },
                // theDiary: {
                //     url: 'theDiary',
                //     title: 'Dagboken',
                //     genre: 'drama',
                //     poster: 'https://images-na.ssl-images-amazon.com/images/I/51gwFLbBumL._SY445_.jpg',
                //     synopsis: 'Andreas gråter varje gång'

                // },
                // afterlife: {
                //     url: 'afterlife',
                //     title: 'Afterlife',
                //     genre: 'action',
                //     poster: 'https://static.posters.cz/image/750/posters/resident-evil-2-city-key-art-i70157.jpg',
                //     synopsis: 'Frän film'

                // },
              },
            movieDisplay: Object,
            
  },
  mutations: {
    movieShowing(state, value) {
      state.movieDisplay = value;
      
    },
    setMovies(state, data){
      state.movies.movie = data
      },

      publishMovies(state){
      state.publishMovies=true;
      }
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

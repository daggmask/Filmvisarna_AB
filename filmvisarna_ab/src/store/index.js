import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies:[
                {
                    title: 'grinch',
                    genre: 'comedy',
                    poster: 'https://cdn.cdon.com/media-dynamic/images/product/movie/dvd/image1/grinchen_nordic-34239133-frntl.jpg'
                },
                {
                    title: 'Dagboken',
                    genre: 'drama',
                    poster: 'https://images-na.ssl-images-amazon.com/images/I/51gwFLbBumL._SY445_.jpg'
                },
                {
                    title: 'afterlife',
                    genre: 'action',
                    poster: 'https://static.posters.cz/image/750/posters/resident-evil-2-city-key-art-i70157.jpg'
                },

            ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

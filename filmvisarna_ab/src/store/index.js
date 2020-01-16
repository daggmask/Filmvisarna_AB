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
                    poster: ''
                },
                {
                    title: 'afterlife',
                    genre: 'action',
                    poster: ''
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

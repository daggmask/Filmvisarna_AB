import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '../views/movieList.vue'
import Movie from '../views/movieShowing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movielist',
    component: MovieList
  },
  {
    path:'/movies/:movie',
    name:'movie',
    component: Movie
  }
]

const router = new VueRouter({
  routes, 
  mode:'history',
  base: process.env.BASE_URL
})

export default router

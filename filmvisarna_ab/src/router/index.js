import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from '../views/movieList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movielist',
    component: MovieList
  },
]

const router = new VueRouter({
  routes, 
  mode:'history',
  base: process.env.BASE_URL
})

export default router
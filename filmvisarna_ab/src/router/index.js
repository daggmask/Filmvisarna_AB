import Vue from "vue";
import VueRouter from "vue-router";
import MovieList from "../views/movieList.vue";
import Movie from "../views/movieShowing.vue";
import aboutPage from "@/views/aboutPage.vue";
import homePage from "@/views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homePage",
    component: homePage
  },
  {
    path: "/about",
    name: "aboutPage",
    component: aboutPage
  },
  {
    path: "/movies",
    name: "movielist",
    component: MovieList
  },
  {
    path: "/movies/:movie",
    name: "movie",
    component: Movie
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

export default router;

<template>
  <div id="app">
    <a @click="publishMovies" class="btn-floating pulse"><i class="material-icons">publish</i></a>
    <navBar></navBar>
    <!-- Header -->
    <router-view></router-view>
    <!-- Footer -->
    <!-- Menu -->
  </div>
</template>

<script>
import navBar from '@/components/menu.vue'
export default {
  components:{
    navBar,
  },
          methods:{
      publishMovies(){
        this.$store.dispatch("publishMovies")
      }
    }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}
.container{
  display: flex;
}
.col{
  flex-direction: column;
}
#app{
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(0, 0, 0);
}
</style>
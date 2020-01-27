

<template>
  <div id="app">
    <!--<a @click="publishMovies" class="btn-floating pulse"><i class="material-icons">publish</i></a>-->
    <mainHeader></mainHeader>
    <main>
    <Menu id="navbar"></Menu>
    <router-view></router-view>
    </main>
    <Footer></Footer>
    <!-- Menu -->
  </div>
</template>

<script>
import mainHeader from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import Menu from '@/components/menu.vue'
export default {
  components:{
    Footer,
    Menu,
    mainHeader
  },
  
    methods:{
      publishMovies(){
        this.$store.dispatch("publishMovies")
      }
    },
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
  flex-direction: column;
  display: flex;
  
}
main{
  flex: 1;
}
#navbar{
  z-index: 999;
}
</style>


<template>
  <div id="app">
    <mainHeader />
    <main>
      <Menu id="navbar" />
      <router-view />
    </main>
    <Footer />
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
#app{
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(0, 0, 0);
  flex-direction: column;
  display: flex;
}
#navbar{
  z-index: 999;
}
</style>
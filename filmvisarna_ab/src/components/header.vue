<template>
<div class="headerDiv">
  <header class="container head">
    <Menu id="navbar"></Menu>
    <router-link to='/'>
      <h1>FILMVISARNA</h1>
    </router-link>
  </header>
  </div>
</template>

<script>
import Menu from '@/components/menu.vue';
export default{
  components:{
    Menu
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');

*{
  box-sizing: border-box;
}
.headerDiv{
  width: 100vw;
  background-color: #01579b;
}
.head{
 width: 100vw;
 justify-content: space-evenly;
}
#navbar{
  z-index: 999;
  
}
header{
  padding: 3vh;
  align-items: center;
}
h1{
  font-family: 'Monoton', cursive;
  margin-top:0%;
  margin-bottom: 0%;
  cursor:pointer;
  font-size: 2em;
}
.material-icons{
  font-size: 60PX;
}
</style>
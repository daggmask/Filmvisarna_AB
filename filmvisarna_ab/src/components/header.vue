<template>
<div class="backgroundColour">
<div class="headerDiv container row valign-wrapper">
  <div class="col s2 l3">
    <Menu id="navbar"></Menu>
    </div>
    <div class="col s8 l6">
    <router-link to='/'>
      <h1 class="center-align">FILMVISARNA</h1>
    </router-link>
    </div>
    <div class="col s2 l3 right-align">
                <a
            href="create_user"
            class="btn-close material-icons user"
            >account_circle</a
          >
    </div>
  </div>
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
#navbar{
  z-index: 999;
  
}
.backgroundColour{
  height: 10.5vh;
  background-color: #01579b;
  background-size: cover;
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
.user{
  margin-top: 1.5vh;
  margin-right: 2vw;
  font-size: 40px;
}
</style>
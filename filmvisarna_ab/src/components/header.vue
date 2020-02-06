<template>
<header class="light-blue darken-4">
  <div class="container">
    <div class="row">
      <div class="col s2 hide-on-large-only">
        <i class="material-icons">menu</i>
      </div>
      <div class="col s8 offset-l2 center-align">
        <router-link to='/'>
          <h1>FILMVISARNA</h1>
        </router-link>
      </div>
      <div class="col s2 right-align">
        <router-link to='/create_account'>
          <i class="material-icons">account_circle</i>
        </router-link>
      </div>
    </div>
    <nav class="row light-blue darken-4 hide-on-med-and-down">
      <router-link class="col l2 offset-l3 center-align" to="/">Hem</router-link>
      <router-link class="col l2 center-align" to="/movies">Filmer</router-link>
      <router-link class="col l2 center-align" to="/about">Om oss</router-link>
    </nav>
  </div>
</header>
<!-- <div class="backgroundColour">
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
  </div> -->
</template>

<script>
export default{
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');

#navbar{
  z-index: 999;
}
.container{
  flex-direction: column;
}
.row{
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
}
nav{
  box-shadow: none;
  height: auto !important;
  line-height: 1rem !important;
}
h1{
  font-family: 'Monoton', cursive;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.85rem;
}
a{
  font-family: 'Righteous';
  font-size: 1.2rem;
}
</style>
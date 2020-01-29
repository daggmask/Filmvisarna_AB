<template>
  <header>
    <router-link to='/'>
      <h1>FILMVISARNA</h1>
    </router-link>
  </header>
</template>

<script>
export default{
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');

*{
  box-sizing: border-box;
}
header{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top:0%;
  background-color: rgb(7, 8, 95);
  background: linear-gradient(to top, black, #01579b);
  align-items: center;
  padding: 3vh;
  width: 100%;
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
  align-items: center;
  justify-content: center;
}
</style>
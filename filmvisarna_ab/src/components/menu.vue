<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/movielist">Filmer</router-link>
    <router-link to="/">KOM DÅ!</router-link>
    <router-link to="/">Om oss</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  background-color: #333;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
.navbar a.active {
  background-color: #4caf50;
  color: white;
}
</style>

<template>
<div class="homePage">
    <div class="row">
    <div class="col s12 m5">
      <div class="card-panel teal">
        <span class="white-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
      </div>
    </div>
  </div>
<div class="google-map" :id="mapName"></div>

</div>
</template>

<script>
</script>

<style scoped>
*{
  box-sizing: border-box;
  }
.homePage{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

</style>
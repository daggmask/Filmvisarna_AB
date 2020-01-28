<template>
  <div class="aboutPage">
    <img src="https://www.ausflugstippsmitkids.de/wp-content/uploads/2017/09/FTBL2831_Smaragd_8-lpr-1.jpg" alt="">
    <h3>En bio upplevelse som man sent glömmer</h3>
    <p>
      Filmvisarnas biografer erbjuder en hög kvalite på både film och salonger. 
      Hos oss visas alla filmer i IMAX format och leveraras med ett mäktigt surround-ljud som gör det omöjligt somna i våra bekväma fåtöljer.
      Är du sugen på något tilltugg till filmen så hittar du det mesta snacks, godis och drycker i vår kiosk. 
    </p>

    <h4>Öppentider:</h4>
    <p>mån - tors 12:00 - 22:00</p>
    <p>fre - lör 12:00 - 00:00</p>
    <p>sön 12:00 - 21:00</p>
    
    <h4>Hitta Hit:</h4>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.8428505604247!2d13.209326015928184!3d55.69171988053711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653979677c463cf%3A0xdc335a111238b2d7!2sKalkstensv%C3%A4gen%203%2C%20224%2078%20Lund!5e0!3m2!1ssv!2sse!4v1579679349171!5m2!1ssv!2sse" frameborder="0" style="border:0;" allowfullscreen="">
    </iframe>
  </div>
</template>

<script>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
*{
  box-sizing: border-box;
  }
.aboutPage{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:0%;
  width: 100%;
  height: 100%;
}
.map{
  width: 80vw;
  height: 50vh;
}
p{
  font-family:Helvetica, Arial, sans-serif;
  font-weight: bold;
  width: 90%;
  text-align: center;
}
h3,h4{
  margin-top: 3%;
  text-align: center;
  font-family: 'Righteous', cursive;
}
img{
  width: 100vw
}
</style>
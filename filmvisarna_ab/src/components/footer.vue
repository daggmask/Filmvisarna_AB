<template>
    <footer class="page-footer light-blue darken-4 footback">
        <div class="container conttext"> 
            <div class="row containfoot">
                <div class="col s12 ">
                    <a href="mailto:filmvisarnaab@gmail.com" target="_top">
                        <p><i class="material-icons iconfooter">email</i>filmvisarnaab@gmail.com</p>
                    </a>
                    <a href="https://www.google.se/maps/place/Kalkstensv%C3%A4gen+3B,+224+78+Lund/@55.6917221,13.2098434,17z/data=!3m1!4b1!4m5!3m4!1s0x465397960c2a01df:0xb1c484736240c8d8!8m2!3d55.6917221!4d13.2120321" target="_blank">
                        <p class="grey-text text-lighten-4"><i class="material-icons iconfooter">home</i> Kalkstensvägen 3B, Lund</p>
                    </a>
                    <a href="tel:+46700052668">
                        <p><i class="material-icons iconfooter">call</i>+46700052668</p>
                    </a>
                </div>
                <div class="col s12 copy">
                    © 2020 Copyright Filmvisarna AB
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footback{
    background: linear-gradient(to bottom, black, #01579b);
    width: 100%;
}
.conttext{
    font-size: 0.8em;
}
.containfoot{
    text-align: center;
}
.footer-copyright{
    justify-content: center;
}
.copy{
    font-size: 0.9em;
    margin-top: 1.5%;
}
.iconfooter{
    font-size: 1em;
}
</style>
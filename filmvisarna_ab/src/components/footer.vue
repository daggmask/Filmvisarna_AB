<template>
    <footer class="page-footer light-blue darken-4 footback">
        <div class="container conttext"> 
            <div class="row containfoot">
                <div class="col s12 ">
                    <p><i class="material-icons iconfooter">email</i> filmvisarnaab@gmail.com</p>
                    <p class="grey-text text-lighten-4"><i class="material-icons iconfooter">home</i> Kalkstensvägen 7, Lund</p>
                    <p> <i class="material-icons iconfooter">call</i> 0760 - 45 34 65</p>
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

<style>
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
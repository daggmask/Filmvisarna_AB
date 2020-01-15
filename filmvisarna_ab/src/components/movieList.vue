<template>
  <ul>
      <li v-for="movie in movies"
        v-bind:key="movie.title">
        <div class="container">
            <div class="container-img">

            </div>
            <div class="container">
                <h2>{{movie.title}}</h2>
                <p>{{movie.genre}}</p>
            </div>
            
        </div>

      </li>
  </ul>
</template>

<script>
export default {
    data(){
        return {
            movies:[
                {
                    title: 'grinch',
                    genre: 'comedy'
                },
                {
                    title: 'Dagboken',
                    genre: 'drama'
                },
                {
                    title: 'afterlife',
                    genre: 'action'
                },

            ]
        }
    }

}
</script>

<style>

*{
    box-sizing: border-box;
}

.container{
    display: flex;
    
}

.container-img{
    background-image: url(https://m.media-amazon.com/images/M/MV5BYmE5Yjg0MzktYzgzMi00YTFiLWJjYTItY2M5MmI1ODI4MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg)
}

</style>
<template>
<div>
    <div class="container col">
        <div class="row">
            <filtering :type="'genre'" @updateFilter="setFilter"></filtering> 
            <filtering :type="'date'" @updateFilter="setFilter"></filtering> 
        </div>
        <MovieList :filter="filter"></MovieList>
    </div>
</div>
    
    
</template>

<script>
import MovieList from '@/components/movieList.vue'
import filtering from '@/components/FilteringButton.vue'

export default {
    components:{
        MovieList,
        filtering
    },
    methods:{
        setFilter(genre){
            this.filter = genre;
        }
    },
    data(){
        return{
            filter: ''
        }
    }
}
</script>

<style scoped>

</style>
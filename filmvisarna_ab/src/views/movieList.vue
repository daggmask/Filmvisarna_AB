<template>
<div>
    <div class="container col">
        <filtering @updateFilter="setFilter"></filtering> 
        <MovieList :filter="filter"></MovieList>
    </div>
</div>
    
    
</template>

<script>
import MovieList from '@/components/movieList.vue'
import filtering from '@/components/Filtering.vue'

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
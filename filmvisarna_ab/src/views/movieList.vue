<template>
<div>
    <div class="container col">
        <div class="row">
            <filtering class="col s6 m4 l2 only-padding-right" :type="'genre'" @updateFilter="setFilter"></filtering> 
            <filtering class="col s6 m4 l2 only-padding-right" :type="'datum'" @updateFilter="setFilter"></filtering>
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
        setFilter(filter){
            this.filter = filter    ;
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
.only-padding-right{
    padding-left: 0;
    padding-right: 1.5rem;
}
</style>
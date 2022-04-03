<script setup>
import { useRoute } from "vue-router";
import PlantList from "../data/plant-list.json"

const route = useRoute ();
console.log(route.params.slug);
const plant = PlantList.find(plant => {
    return plant.slug === route.params.slug
})
</script>


<template>
    <div class="plant-detail"> 
        <h1>{{plant.commonName}}</h1>
        <h2>{{plant.botanicalName}}</h2>
        <img :src="plant.image" :alt="plant.commonName">
        <p>Collected? {{plant.collected}}</p>
    </div>
</template>

<style scoped>
.plant-detail {
    border: 5px solid rgb(10, 56, 25);
    color: rgb(10, 56, 25);
}
.plant-detail img {
    max-width: 500px;
}


</style>
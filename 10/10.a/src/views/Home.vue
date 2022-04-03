<script setup>
import { RouterLink} from 'vue-router';
import PlantList from "../data/plant-list.json";

</script>

<template>
<div class="plant-container">
    <div class="plant-list-item" v-for="(plant,id) in PlantList" :key="id">
    <RouterLink :to="'/plant/' + plant.slug">{{plant.commonName}}</RouterLink>
</div>
</div>

</template>

<style scoped>
.plant-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
}

.plant-list-item {
    width: 500px;
    text-align: center;
    padding: 10px;
    margin: 10px;
    border: 5px solid rgb(10, 56, 25);
    border-radius: 4px;
    background: rgb(240, 211, 235);
    font-family:Arial, Helvetica, sans-serif;
    text-decoration: none;
}
.plant-list-item:hover {
    background: rgb(10, 56, 25);
}
.plant-list-item a {
    color: rgb(10, 56, 25);
}
.plant-list-item:hover a {
    color: rgb(240, 211, 235);
}
</style>
<script setup>
// js here
import { reactive } from 'vue';
import ItemRow from "./components/ItemRow.vue"
const plants = [
          {
           commonName: "Pink Princess Philodendron",
           botanicalName: "Philodendron erubescens 'pink princess'",
           image: "./components/img/ppp.jpeg",
           collected: "yes",
           id: 1
          }, {
            commonName: "Thai Constellation",
            botanicalName: "Monstera Deliciosa Thai Constellation",
            image: "img/tc.jpeg",
            collected: "no",
            id: 2
          }, {
            commonName: "Philodendron 'Jungle Boogie'",
            botanicalName: "Philodendron Narrow",
            image: "./img/jb.jpeg",
            collected: "no",
            id: 3
          }, {
            commonName: "Owl Eye Peperomia",
            botanicalName: "Peperomia polybotrya",
            image: "img/pep.jpeg",
            collected: "yes",
            id: 4
          }, {
            commonName: "Marble Queen Pothos",
            botanicalName: "Epipremnum aureum 'marble queen'",
            image: "img/mqp.jpeg",
            collected: "yes",
            id: 5
          }];
const newPlantObj = {
          commonName: " ",
           botanicalName: " ",
           image: " ",
           collected: " "
           }
const state = reactive({plants: plants, newPlantObj: newPlantObj});
function submitHandler() {
        state.plants.push({
          commonName: state.newPlantObj.commonName,
           botanicalName: state.newPlantObj.botanicalName,
           image: state.newPlantObj.image,
           collected: state.newPlantObj.collected,
           id: state.plants.length + 1,
        });
        state.newPlantObj.commonName = "";
        state.newPlantObj.botanicalName = "";
        state.newPlantObj.image = "";
        state.newPlantObj.collected = "";
      
          //vm.plants = vm.plants.concat(vm.newPlantObj);
          //vm.resetForm();
        }
function handleDelete(plantToDelete) {
  state.plants = state.plants.filter((plantToCheck) => {
    return plantToDelete !== plantToCheck;
  });
}
</script>

<template>
<div class="collection-wrapper">
  <h1>Plant Collection</h1>
  <table>
            <thead>
                <th>common name</th>
                <th>botanical name</th>
                <th>image</th>
                <th>collected?</th>
            </thead>
            <ItemRow 
            v-for="(plant, idx) in state.plants" 
            v-bind:key="idx" 
            v-bind:plant="plant"
            v-bind:idx="idx"
            v-on:delete-plant="handleDelete"
            />
        </table>
        <form v-on:submit.prevent="submitHandler">
            <fieldset>
                <legend>Add a plant to the collection</legend>
                <div>
                    <label for="commonName">common name</label>
                    <input id="commonName" type="text" v-model="newPlantObj.commonName">
                </div>
                <div>
                    <label for="botanicalName">botanical name</label>
                    <input id="botanicalName" type="text" v-model="newPlantObj.botanicalName">
                </div>
                <div>
                    <label for="image">image</label>
                    <input id="image" type="text" v-model="newPlantObj.image">
                </div>
                <div>
                    <label for="collected">collected?</label>
                    <input id="collected" type="text" v-model="newPlantObj.collected">
                </div>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
</div>
</template>

<style>
body{
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    text-align: center;
}
table, thead, th, tbody, tr, td{
    border: 0 none;
    padding: 2em;
}
table {
    width: 100%;
    margin: auto;
}
.wish {
    background: pink;
}
.botanicalName {
    text-decoration-line: underline;
}
h1 {
    color: olive;
    margin-top: 2rem;
}
</style>

<script setup>
import {reactive} from "vue";
// javascript here
import CamelidRow from "./components/CamelidRow.vue";
const isWorking = true;
const camelids = [
      {
        commonName: "Lama",
        binomialName: "Lama glama",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Lama",
        species: "L. glama",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg",
        id: 0
        },
      {
        commonName: "Alpaca",
        binomialName: "Vicugna pacos",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Vicugna",
        species: "V. pacos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg",
        id: 1
      },
    ];
    const state = reactive({camelids})
    function handleRowDelete(camelid) {
      state.camelids = state.camelids.filter(item => {
        return item !== camelid;
      });
    }
</script>

<template>
  <!-- html goes here-->
<div class="container">
  <h1>Lama Alpaca</h1>
  <CamelidRow 
    v-for="camelid in state.camelids"
    v-bind:key="camelid.id"
    v-bind:camelid="camelid"
    v-on:delete-row="handleRowDelete" />
  <div>
    
  </div>
</div>


</template>

<style>
/* style-go-here */
.container {
  width: 600px;
  margin: 20px auto 0;
  }
</style>

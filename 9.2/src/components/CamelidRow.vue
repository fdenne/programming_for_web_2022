<script setup>
const props = defineProps(["camelid"]);
console.log(props.camelid);
// const triggerConsole = (camelid) => {
   // console.log("you clicked", camelid.commonName);
// }

</script>

<template>
    <div class="camelid-row" v-on:click="triggerConsole(props.camelid)">
    <h5>{{props.camelid.commonName}}</h5>
    <img v-bind:src="props.camelid.image" v-bind:alt="props.camelid.commonName" v-on:click="$emit('imageClick', props.camelid.commonName)">
    <button type="button" v-on:click="$emit('deleteRow', props.camelid)">Delete</button>
    
  </div>
</template>

<style scoped>

 h5 {
  text-align: center;
  font-size: 18px;
}
 p {
  font-size: 18px;
  text-align: center;
}
.camelid-row {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: 1px solid black;
    margin: 10px;
    border-radius: 5px;
}
 .camelid-row img {
  max-width: 300px;
  display: block;
  margin: 5px auto 0;

}
</style>
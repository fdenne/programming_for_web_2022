<script setup>
defineProps(["plant", "idx"]);

</script>

<template>
    <tbody>
                <tr class="collectionRow" v-bind:class="{collectionRow: true, odd: idx % 2 !== 0, wish: plant.collected}">
                
                    <td>{{plant.commonName}}</td>
                    <td>{{plant.botanicalName}}</td>
                    <td><img :src="plant.image" :alt="plant.commonName"></td>
                    <td>{{plant.collected}}</td>
                    <td class="cellActions">
                        <button type="button" v-on:click="$emit('deletePlant', plant)">Delete</button>
                    </td>
                </tr>
            </tbody>
</template>
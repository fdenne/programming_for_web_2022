<script setup>
import { RouterLink} from 'vue-router';
import MusicList from "../data/music-list.json";

</script>

<template>
<div class="song-container">
    <div class="song-list-item" v-for="(song,idx) in MusicList" :key="idx">
    <RouterLink :to="'/song/' + song.slug">{{song.title}}</RouterLink>
</div>
</div>

</template>

<style scoped>
.song-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.song-list-item {
    width: auto;
    padding: 10px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 4px;
    background: white;
}
.song-list-item:hover {
    background: black;

}
.song-list-item a {
    color: black;
}
.song-list-item:hover a {
    color: white;
}
</style>
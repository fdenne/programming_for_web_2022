<script setup>
import { RouterView, RouterLink } from "vue-router"
</script>

<template>
 <nav>
   <RouterLink to="/">Home</RouterLink>
   
 </nav>
  <RouterView />
</template>

<style>
html {
  font-size: 16px;
  font-family:Arial, Helvetica, sans-serif;
  color: white;
  margin: 50px auto 50px;
  text-align: center;
}
nav {
  width: 100%;
  height: 45px;
  
}
nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
  color:rgb(10, 56, 25);
  font-weight: 900;
  font-size: 30px;
  text-align: center;
  line-height: 1.75;
}
</style>
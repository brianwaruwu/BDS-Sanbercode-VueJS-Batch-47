<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav class="navbar navbar-expand-sm bg-dark container">

<!-- Links -->
<ul class="navbar-nav">
  <li class="nav-item">
    <RouterLink class="nav-link" to="/">Home</RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink class="nav-link" to="/post">Post </RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink class="nav-link" to="/about">About</RouterLink>
  </li>
</ul>

</nav>

<div class="container">
  <RouterView />
</div>
  
</template>

<style scoped>

</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/about" class="nav-link">About</RouterLink>
    <RouterLink to="/builder" class="nav-link">Builder</RouterLink>
    <RouterLink to="/orders" class="nav-link">Orders</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  nav {
    display: flex;
    flex-direction: row;

    width: 100%;
    position: absolute;
    top: 0;

    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1em;
  
    background-color: var(--main);
  }

  .nav-link {
    color: var(--text);
    text-decoration: none;
    font-size: 1.5em;
  }

  main {
    margin-top: 4em;
  }
</style>

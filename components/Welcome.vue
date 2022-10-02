<template>
  <div class="container">
    <NuxtLogo />
    <h1>Welcome to Nuxt</h1>
  </div>
</template>
<script>
import NuxtLogo from './NuxtLogo.vue';
export default {
    components: { NuxtLogo }
}
</script>
<style>
  body {
    margin: 0;
  }
  .container {
    height: 100vh;
    width: 100vw;
    background: rgb(1, 42, 53);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: white;
    text-align: center;
    font-family: sans-serif;
    font-weight: 400;
  }
</style>
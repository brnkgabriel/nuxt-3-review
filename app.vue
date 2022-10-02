<template>
  <div>
    <h2>Hello from Nuxt 3</h2>
    <h2>{{double}}</h2>
    <h1>{{count}}</h1>
  </div>
</template>
<script setup>
  import { ref, computed } from "#imports"
import Welcome from "./components/Welcome.vue";
  // ref() and computed() are auto-imported
  const count = ref(1)
  const double = computed(() => count.value * 8)
</script>
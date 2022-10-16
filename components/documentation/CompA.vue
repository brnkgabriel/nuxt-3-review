<template>
  <div>
    <p>Current component: A</p>
    <span>count: {{ count }}</span>
    <button @click="count++">increment</button>
  </div>
</template>
<script setup>
const count = ref(0)

onActivated(() => {
  console.log("comp a is activated")
})

onDeactivated(() => {
  console.log("comp a is deactivated")
})
</script>
<style>
  
</style>
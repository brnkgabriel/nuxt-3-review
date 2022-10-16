<template>
  <div>
    <p>Current component: B</p>
    <span>Message is: {{ msg }}</span>
    <input type="text" v-model="msg">
  </div>
</template>
<script setup>
const msg = ref('')

onActivated(() => {
  console.log("comp b is activated")
})

onDeactivated(() => {
  console.log("comp b is deactivated")
})
</script>
<style>
  
</style>
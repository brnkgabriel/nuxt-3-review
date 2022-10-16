<template>
  <li>{{todo.text}}</li>
</template>
<script setup>
  const props = defineProps({
    todo: Object
  })
</script>
<style>
  
</style>
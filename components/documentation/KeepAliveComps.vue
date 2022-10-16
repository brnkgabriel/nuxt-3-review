<template>
  <div class="demo">
    <label>
      <input type="radio" v-model="current" :value="CompA">
    </label>
    <label>
      <input type="radio" v-model="current" :value="CompB">
    </label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>
<script setup>

import CompA from './CompA.vue';
import CompB from './CompB.vue';
const current = shallowRef(CompA)

</script>
<style lang="">
  
</style>
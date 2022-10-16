<template lang="">
  <!-- <button @click="$emit('increase-by', 4)">
    increase by 4
  </button> -->
  <!-- <button @click="buttonClick">
    define emits
  </button> -->
  <button>
    {{ message }}
  </button>
</template>
<script setup>
import { myInjectionKey } from "../../lib/util"
const { message } = inject(myInjectionKey)
// const count = inject("read-only-count")
// const { location, updateLocation } = inject("location")
// const emit = defineEmits([
//   'inFocus',
//   'submit'
// ])

// const buttonClick = () => {
//   emit('submit', [3,4,5])
// }
</script>
<style lang="">
  
</style>
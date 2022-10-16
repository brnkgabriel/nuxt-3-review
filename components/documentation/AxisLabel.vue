<template lang="">
  <text :x="point.x" :y="point.y">
    {{ stat.label }}
  </text>
</template>
<script setup>
import { valueToPoint } from "../../lib/util"

const props = defineProps({
  stat: Object,
  index: Number,
  total: Number
})

const point = computed(() => valueToPoint(
  +props.stat.value + 10,
  props.index,
  props.total
))
</script>
<style lang="">
  
</style>
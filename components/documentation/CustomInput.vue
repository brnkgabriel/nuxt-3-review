<template>
  <!-- <div class="wrap">
    <input v-model="fnValue" />
    <input v-model="lnValue" />
  </div> -->
  <!-- <input
  :value="title"
  @input="$emit('update:title', $event.target.value)" /> -->
  <!-- <input v-model="value" /> -->
  <input type="text" :value="title" @input="emitValue" />
</template>
<script setup>
const props = defineProps({
  title: String,
  titleModifiers: {
    default: () => ({})
  }
})


const emit = defineEmits([ 'update:title' ])

const emitValue = e => {
  let value = e.target.value
  if (props.titleModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:title', value)
}
// const props = defineProps({
//   firstName: String,
//   lastName: String,
// })

// const emits = defineEmits([
//   'update:firstName',
//   'update:lastName'
// ])

// const fnValue = computed({
//   get() {
//     return props.firstName
//   },
//   set(value) {
//     emits('update:firstName', value)
//   }
// })

// const lnValue = computed({
//   get() {
//     return props.lastName
//   },
//   set(value) {
//     emits('update:lastName', value)
//   }
// })
// defineProps([ 'title' ])
// defineEmits([ 'update:title' ])

// const props = defineProps(['modelValue'])
// const emit = defineEmits(['update:modelValue'])

// const value = computed({
//   get() {
//     return props.modelValue
//   },
//   set(value) {
//     emit('update:modelValue', value)
//   }
// })

</script>
<style>
  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 8px;
    margin: 8px;
  }
</style>
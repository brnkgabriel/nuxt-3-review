<template lang="">
  <li>
    <div
    @click="toggle"
    @dblclick="changeType"
    :class="{ bold: isFolder }">
      {{model.name}}
      <span v-if="isFolder">
        [{{ isOpen ? "-" : "+" }}]
      </span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <TreeItem
      v-for="(model, idx) in model.children"
      :key="idx"
      :model="model"
      class="item"></TreeItem>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>
<script setup>
  const props = defineProps({
    model: Object
  })

  const isOpen = ref(false)
  const isFolder = computed(() => {
    return props.model.children && props.model.children.length
  })

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const changeType = () => {
    if (isFolder.value) {
      props.model.children = []
      addChild()
      isOpen.value = true
    }
  }

  const addChild = () => {
    props.model.children.push({
      name: "new stuff"
    })
  }
</script>
<style lang="">
  
</style>
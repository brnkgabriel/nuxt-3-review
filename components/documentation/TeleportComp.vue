<template>
  <!-- <div class="outer">
    <h3>Vue Teleport Example</h3>
    <div>
      <MyModal />
    </div>
  </div> -->
  <div>
    <button id="show-modal" @click="showModal = true">show modal</button>
    <Teleport to="body">
      <Modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </Modal>
    </Teleport>
  </div>
</template>
<script setup>
import MyModal from './MyModal.vue';
import Modal from "./Modal.vue"

const showModal = ref(false)
</script>
<style>
  
</style>
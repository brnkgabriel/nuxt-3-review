<template>
  <form role="search" autocomplete="on">
    <label for="search" class="hidden-visually">Search:</label>
    <input aria-label="search" aria-labelledby="search" placeholder="search anything..." title="search" aria-placeholder="search anything" type="text" name="search" id="search" v-model="search"/>
    <button type="submit">Search</button>
  </form>
</template>
<script>
export default {
  
}
</script>
<style>
  
</style>
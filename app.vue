<template>
  <div class="bg-slate-900 h-screen">
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-9">
      <div class="max-w-md w-full space-y-8">
        <div>
          <div class="h-25 w-25"></div>
          <img src="/img/logo_short.png" alt="full stack logo" class="mx-auto h-48 w-auto"/>
          <h2>
            <span>
              Check out other
            </span>
            <span class="text-sky-500">Full stack Jack videos on</span>
            <span class="text-lime-500">Nuxt</span>
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref, computed } from "#imports"
import Welcome from "./components/Welcome.vue";
  // ref() and computed() are auto-imported
  const count = ref(1)
  const double = computed(() => count.value * 8)
</script>
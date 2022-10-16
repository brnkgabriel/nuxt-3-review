<template>
  <div class="h-screen flex items-center justify-center px-8 bg-slate-100 dark:bg-slate-900">
    <div class="max-w-[600px] shadow-md p-6 rounded-md bg-white dark:bg-slate-700 dark:text-white">
      <div class="flex items-start sm:items-center mb-4">
        <h1 class="text-4xl flex-1">Tailwind Dark/Light Mode</h1>
        <div class="btn">
          <img class="moon cursor-pointer w-7" src="/night.svg" alt="">
          <img class="sun cursor-pointer hidden w-10" src="/daylight.svg" alt="">
        </div>
      </div>
      <p class="text-md mb-4">
        In this tutorial we will be learning how to enable dark mode for your tailwind website / app. Also, we will show how we can create a toggle to change between a light &amp; dark theme.
      </p>
      <button class="py-2 px-4 bg-black text-white rounded-md dark:bg-white dark:text-slate-900">
        Learn more!!
      </button>
    </div>
  </div>
</template>
<script setup>

onMounted(() => {
  const body = document.querySelector("body")
  const btn = document.querySelector(".btn")

  const sun = document.querySelector(".sun")
  const moon = document.querySelector(".moon")


  const userTheme = localStorage.getItem("theme")
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

  const toggle = () => {
    const imgs = document.querySelectorAll("img")
    imgs.forEach(img => img.classList.toggle("hidden"))
    body.classList.toggle("dark")
  }
  console.log("body is", body)

  const iconToggle = () => {
    moon.classList.toggle("hidden")
    sun.classList.toggle("hidden")
  }

  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      body.classList.add("dark")
      moon.classList.add("hidden")
      sun.classList.remove("hidden")
      return
    }
    moon.classList.remove("hidden")
    sun.classList.add("hidden")
  }

  const themeSwitch = () => {
    console.log("checking themeSwitch")
    if (body.classList.contains('dark')) {
      body.classList.remove("dark")
      localStorage.setItem("theme", "light")
      iconToggle()
      return
    }

    body.classList.add("dark")
    localStorage.setItem("theme", "dark")
    iconToggle()
  }

  themeCheck()

  // btn.addEventListener('click', evt => toggle())
  btn.addEventListener("click", themeSwitch)
})
</script>
<style lang="">
  
</style>
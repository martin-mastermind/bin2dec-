<template>
  <main>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Mastermind - Bin2Dec",
  meta: [{ name: "description", content: "Binary to decimal converter" }],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

:root {
  --text: #ffffff;
  --background: #1c1c1c;
  --primary: #400060;
}

* {
  box-sizing: border-box;
}

html,
body {
  background: var(--background);
  color: var(--text);
  font-family: "Roboto", sans-serif;
  margin: 0;
  overflow: hidden;
}
</style>

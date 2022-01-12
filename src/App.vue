<template>
  <home />
</template>

<script>
import Home from "@/views/Home.vue";

export default {
  components: {
    Home,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap");

:root {
  --blue-pastel: #2a5865;
  --soft-blue-pastel: #90bdc2;
  --pink-pastel: #dbb4ad;
}
*,
::before,
::after {
  box-sizing: border-box;
  font-family: "Dongle", sans-serif;
}

body {
  background-color: var(--pink-pastel);
}
</style>

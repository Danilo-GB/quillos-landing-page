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
:root {
  --blue-pastel: #2a5865;
  --soft-blue-pastel: #90bdc2;
  --pink-pastel: #dbb4ad;
}
*,
::before,
::after {
  box-sizing: border-box;
}

body {
  background-color: var(--pink-pastel);
}
</style>

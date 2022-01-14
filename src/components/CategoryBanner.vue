<template>
  <div
    class="product-banner w-full h-24 text-white text-3xl text-center font-light flex flex-row items-center justify-center"
  >
    <div>¡{{ category.toUpperCase() }}!</div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: "No encontrado :(",
    },
  },
};
</script>

<style>
.product-banner {
  background-color: var(--soft-blue-pastel);
}
</style>

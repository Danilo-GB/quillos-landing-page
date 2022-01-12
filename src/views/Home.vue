<template>
  <main class="main-container">
    <welcome />
    <products-section />
  </main>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import ProductsSection from "@/components/ProductsSection.vue";
import ShopingCart from "@/components/ShopingCart.vue";
export default {
  name: "Home",
  components: {
    Welcome,
    ProductsSection,
    ShopingCart,
  },
};
</script>
<style>
.main-container {
  flex-basis: 50%;
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
</style>

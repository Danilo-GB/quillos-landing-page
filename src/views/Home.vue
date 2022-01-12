<template>
  <q-header />
  <main class="main-container">
    <welcome />
    <products-section />
  </main>
</template>

<script>
import QHeader from "@/components/Header.vue";
import Welcome from "@/components/Welcome.vue";
import ProductsSection from "@/components/ProductsSection.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
export default {
  name: "Home",
  components: {
    QHeader,
    Welcome,
    ProductsSection,
    ShoppingCart,
  },
};
</script>
<style>
@media (min-width: 1000px) {
  .main-container {
    flex-basis: 50%;
    max-height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }
}
</style>

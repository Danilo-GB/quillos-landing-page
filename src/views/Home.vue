<template>
  <main class="main-container">
    <q-header />
    <welcome />
    <products-section :ProductData="ProductData" />
  </main>
</template>

<script>
import QHeader from "@/components/QHeader.vue";
import Welcome from "@/components/Welcome.vue";
import ProductsSection from "@/components/ProductsSection.vue";
import ProductData from "@/assets/products.json";
export default {
  name: "Home",
  components: {
    QHeader,
    Welcome,
    ProductsSection,
  },
  data() {
    return {
      ProductData,
    };
  },
};
</script>
<style>
.main-container {
  position: relative;
  max-height: 100vh;
}
@media (min-width: 1000px) {
  .main-container {
    flex-basis: 50%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }
}
</style>

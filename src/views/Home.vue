<template>
  <main class="main-container">
    <div class="welcome w-full h-screen">asd</div>
    <products-section />
  </main>
</template>

<script>
import ProductsSection from "@/components/ProductsSection.vue";
import ShopingCart from "@/components/ShopingCart.vue";
export default {
  name: "Home",
  components: {
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
  border: 1px solid gray;
  scroll-snap-type: y mandatory;
}
.welcome {
  scroll-snap-align: start;
}
</style>

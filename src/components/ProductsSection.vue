<template>
  <div class="products-container">
    <section
      v-for="category in ProductData"
      :key="category.id"
      class="category-container h-auto md:h-screen w-full flex flex-row flex-wrap justify-evenly items-center"
    >
      <div class="circle"></div>
      <section
        v-for="product in category.stock"
        :key="product.name"
        class="w-72 h-96 md:h-1/2"
      >
        <product-card :product="product" />
      </section>
    </section>
  </div>
</template>

<script>
import ProductData from "@/assets/products-temp.json";
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      ProductData,
    };
  },
};
</script>
<style>
.circle {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  clip-path: circle(50% at 50% 0);
  background-color: var(--blue-pastel);
  z-index: -1;
}
@media (min-width: 768px) {
  .category-container {
    scroll-snap-align: start;
  }
  .circle {
    width: 50%;
    height: 100%;
    clip-path: circle(70% at 0 50%);
  }
}
</style>

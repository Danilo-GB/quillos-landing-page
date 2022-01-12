<template>
  <div class="products-container relative">
    <div
      v-for="category in ProductData"
      :key="category.id"
      class="category-container w-full h-auto md:h-screen relative flex flex-row flex-wrap gap-3 justify-evenly items-center"
    >
      <div
        class="absolute z-10 w-full text-center md:text-right left-0 lg:top-6 lg:pr-6 text-3xl lg:text-7xl font-bold text-white"
      >
        {{ category.id.toUpperCase() }}!
      </div>
      <div class="absolute z-0 left-0">
        <svg
          viewBox="55 0 120 120"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="var(--blue-pastel)"
          class="hidden lg:block"
        >
          <circle cx="60" cy="60" r="50" /></svg
        ><svg
          viewBox="0 0 120 120"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="var(--blue-pastel)"
          class="block lg:hidden"
        >
          <circle cx="60" cy="60" r="50" />
        </svg>
      </div>
      <div
        v-for="product in category.stock"
        :key="product.name"
        class="product-card my-4 md:my:0 z-10"
      >
        <product-card :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductData from "@/assets/products.json";
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
.product-card {
  width: 200px;
  height: 330px;
}
@media (min-width: 768px) {
  .category-container {
    scroll-snap-align: start;
  }
  .product-card {
    width: 280px;
    height: 450px;
  }
}
</style>

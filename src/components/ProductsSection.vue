<template>
  <div class="products-container relative">
    <div
      v-for="category in ProductData"
      :key="category.id"
      class="category-container w-full h-auto md:h-screen flex flex-row flex-wrap gap-3 justify-evenly items-center"
    >
      <div class="absolute z-0 left-0">
        <svg
          viewBox="55 0 120 120"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="var(--blue-pastel)"
          class="hidden md:block"
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
  width: 300px;
  height: 430px;
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

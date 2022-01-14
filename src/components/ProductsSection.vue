<template>
  <div class="products-container">
    <!-- Category section -->
    <div
      v-for="category in ProductData"
      :key="category.id"
      :id="category.id"
      class="category-container w-full h-auto md:h-screen relative flex flex-row flex-wrap gap-3 justify-evenly items-center"
    >
      <category-banner class="block md:hidden" :category="category.id" />
      <!-- Left circle -->
      <div class="section-circle">
        <li></li>
      </div>
      <!-- Floating quillos -->
      <quillos class="hidden md:block" />
      <!-- Individual product section -->
      <div
        v-for="product in category.stock"
        :key="product.name"
        class="product-card my-4 md:my:0"
      >
        <product-card :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import CategoryBanner from "@/components/CategoryBanner.vue";
import Quillos from "@/components/Quillos.vue";
export default {
  props: {
    ProductData: {
      type: Object,
      default: {},
    },
  },
  components: {
    ProductCard,
    CategoryBanner,
    Quillos,
  },
};
</script>
<style scoped>
.category-container {
  scroll-snap-align: start;
}

.product-card {
  width: 200px;
  height: 330px;
}
.section-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.section-circle li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0 50% 50% 0;
  transform: scale(2) translateX(-30%);
  background-color: var(--blue-pastel);
}
@media (min-width: 768px) {
  .section-circle li {
    width: 50%;
    height: 100%;
  }
  .product-card {
    width: 280px;
    height: 450px;
  }
}
</style>

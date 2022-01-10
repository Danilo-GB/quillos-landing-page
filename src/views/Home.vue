<template>
  <main>
    <section>Welcome</section>
    <section v-for="category in ProductData" :key="category.id">
      <section v-for="product in category.stock" :key="product.name">
        <product-card :product="product" />
      </section>
    </section>
  </main>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import ShopingCart from "@/components/ShopingCart.vue";
import ProductData from "@/assets/products.json";
export default {
  name: "Home",
  components: {
    ProductCard,
    ShopingCart,
  },
  data() {
    return {
      ProductData,
    };
  },
};
</script>

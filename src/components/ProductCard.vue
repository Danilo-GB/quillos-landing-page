<template>
  <div class="bg-white h-full w-full rounded-full px-10 py-2 relative">
    <img
      src="@/assets/products/quillos_de_arequipe.png"
      width="300"
      height="300"
    />
    <div class="text-center h-full">
      <div class="title mb-3">{{ product.name }}</div>
      <div class="detail">{{ product.detail }}</div>
      <div class="absolute bottom-8 left-0 w-full">
        <div
          class="counter mx-auto w-24 h-10 rounded-full flex flex-row justify-evenly items-center text-xl"
        >
          <button @click="removeSaleQuantityToCart">-</button>
          {{ quantityToBuy }}
          <button @click="addSaleQuantityToCart">+</button>
        </div>

        <div class="detail mt-2">
          ${{ product.price }}x{{ product.saleQuantity }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      quantityToBuy: 0,
    };
  },
  methods: {
    addSaleQuantityToCart() {
      this.quantityToBuy += this.product.saleQuantity;
    },
    removeSaleQuantityToCart() {
      this.quantityToBuy -= this.product.saleQuantity;
    },
  },
};
</script>

<style>
.title {
  color: var(--blue-pastel);
  font-size: 2rem;
  font-weight: 400;
  line-height: 1rem;
}
.detail {
  color: var(--soft-blue-pastel);
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1rem;
}
.counter {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  border: solid 2px var(--soft-blue-pastel);
  background-color: var(--soft-blue-pastel);
}
@media (min-width: 768px) {
  .title {
    font-size: 2.25rem;
    line-height: 1.5rem;
  }
  .detail {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
}
</style>

<template>
  <div class="shopping-cart-icon" @click="switchIsShowing">
    <svg
      class="w-8 h-8 transition-all duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
    </svg>
  </div>
  <div
    class="shopping-cart-card w-full md:w-2/6 h-screen overflow-scroll absolute top-16 right-0 md:right-8 font-light"
    v-show="isShowing"
  >
    <div class="text-center text-3xl mb-4">Hoy es todo sobre ti</div>
    <div class="text-center text-3xl mb-4">Tu carrito:</div>
    <table class="w-full" v-if="shoppingList.length > 0">
      <tr>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Costo</th>
      </tr>
      <tr v-for="product in shoppingList" :key="product.name">
        <td>{{ product.name }}</td>
        <td>{{ product.qty }}</td>
        <td>${{ (product.qty / product.saleQuantity) * product.price }}</td>
      </tr>
      <tr>
        <td>TOTAL:</td>
        <td>
          {{ totalPrice }}
        </td>
      </tr>
    </table>

    <div v-else class="text-center text-3xl mb-4 border-t-2 border-b-2">
      Agrega productos a tu carrito o comunicate al Whatsapp para cualquier
      inquietud :)
    </div>
    <div class="w-full">
      Tu nombre:
      <input
        type="text"
        v-model="user.name"
        class="w-full text-black rounded-full px-4"
      />
      Tu direccion:
      <input
        type="text"
        v-model="user.address"
        class="w-full text-black rounded-full px-4"
      />
    </div>
    <div class="w-full flex flex-row justify-items-center mb-4 z-10">
      <a
        :href="`https://api.whatsapp.com/send?phone=573143856294&text=${msgToWhatsapp}`"
        target="blank"
        class="hidden md:block mt-5 p-3 text-center border-2 border-white md:w-full w-4/5 mx-auto rounded-full bg-white text-green-700"
      >
        <svg
          class="w-6 h-6 inline transform rotate-45 -translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
        Pedir al whatsapp
      </a>
      <a
        :href="`whatsapp://send?phone=573143856294&text=${msgToWhatsapp}`"
        target="blank"
        class="md:hidden block mt-5 p-3 text-center border-2 border-white md:w-full w-4/5 mx-auto rounded-full bg-white text-green-700"
      >
        <svg
          class="w-6 h-6 inline transform rotate-45 -translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
        Pedir al whatsapp
      </a>
    </div>
  </div>
</template>

<script>
import bus from "@/services/EventBus";
export default {
  data() {
    return {
      isShowing: false,
      shoppingList: [],
      totalPrice: 0,
      user: {
        name: "",
        address: "",
      },
    };
  },
  methods: {
    switchIsShowing() {
      this.isShowing = !this.isShowing;
    },
    updateCart(name, price, quantity, saleQuantity) {
      let product = {
        name: name,
        qty: quantity,
        price: price,
        saleQuantity: saleQuantity,
      };
      let idx = this.shoppingList.findIndex((product) => product.name === name);
      idx === -1
        ? this.shoppingList.push(product)
        : quantity === 0
        ? this.shoppingList.splice(idx, 1)
        : this.shoppingList.splice(idx, 1, product);
      this.totalPrice = 0;
      for (let product in this.shoppingList) {
        this.totalPrice +=
          (this.shoppingList[product].qty /
            this.shoppingList[product].saleQuantity) *
          this.shoppingList[product].price;
      }
    },
  },
  computed: {
    msgToWhatsapp() {
      if (this.shoppingList.length > 0) {
        let productsList = "";

        for (let product in this.shoppingList) {
          productsList += `%0A
          producto: ${this.shoppingList[product].name}
          cantidad: ${this.shoppingList[product].qty}
          precio:
          ${
            (this.shoppingList[product].qty /
              this.shoppingList[product].saleQuantity) *
            this.shoppingList[product].price
          }%0A`;
        }
        productsList += `---------total: ${this.totalPrice}---------`;

        return `Hola! ${this.user.name ? `soy ${this.user.name},` : ""} ${
          this.user.address ? `mi dirección es: ${this.user.address},` : ""
        } me gustaría solicitar los siguientes productos:%0A${productsList} `;
      } else {
        return "Hola, vengo de la página web de quillos! estoy interesado/a";
      }
    },
  },
  mounted() {
    bus.listen("updateCart", (name, price, quantity, saleQuantity) =>
      this.updateCart(name, price, quantity, saleQuantity)
    );
  },
};
</script>

<style>
.shopping-cart-icon svg {
  border: solid 5px var(--soft-blue-pastel);
  border-radius: 10px;
  background-color: var(--soft-blue-pastel);
  cursor: pointer;
}
.shopping-cart-icon svg:hover {
  stroke: var(--blue-pastel);
  border: solid 5px #f5f5f5;
  border-radius: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
}
.shopping-cart-card {
  background-color: var(--soft-blue-pastel);
  border-radius: 0 0 10px 10px;
  padding: 2rem 2rem;
  overflow: hidden;
  font-size: 1.5rem;
}
td {
  border-top: 1px solid #f5f5f5;
  padding: 5px 10px;
}
</style>

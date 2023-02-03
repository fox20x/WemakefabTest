<template>
  <div class="cart">
    <div class="cart__block cart__block_header">
      <span class="r_18">Profile</span>
      <span class="r_18 text_orange">Basket({{ products_count }})</span>
    </div>
    <div class="cart__block cart__block_info">
      <p class="b_24 text_uppercase title">Total</p>
      <ul class="list">
        <li class="item">
          <span class="r_16">Subtotal:</span>
          <span class="m_16">${{ subtotal }}</span>
        </li>
        <li class="item">
          <span class="r_16">Sale:</span>
          <span class="m_16">${{ sale }}</span>
        </li>
        <li class="item">
          <span class="r_16">Content:</span>
          <button class="m_16 text_underline" @click="removeAll">
            Remove all
          </button>
        </li>
      </ul>
    </div>
    <div class="cart__block cart__block_total">
      <span class="m_20">Order Total:</span>
      <span class="m_20">${{ total }}</span>
    </div>
    <div class="cart__block cart__block_preview">
      <card
        v-for="(product, i) in products_from_cart"
        :key="i"
        :id="product.id"
        :name="product.name"
        :picture="product.picture"
        :cost="product.cost"
      />
    </div>
    <button class="cart__block cart__block_checkout">
      <span class="m_20">Checkout</span>
      <i class="icon arrow-right"></i>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Card from "@/components/cards/Cart.vue";

function calcSale(products_array) {
  return products_array.reduce((prev, curr) => {
    const cost = curr.cost;
    const sale = cost.previous ? cost.previous - cost.current : 0;
    return prev + sale;
  }, 0);
}

function calcTotal(products_array) {
  return products_array.reduce((prev, curr) => {
    const product_cost = curr.cost;
    const price_without_discount = product_cost.previous
      ? product_cost.previous
      : product_cost.current;

    return prev + price_without_discount;
  }, 0);
}

export default {
  data() {
    return {
      products_from_cart: [],
      products_count: 0,
      subtotal: 0,
      sale: 0,
      total: 0,
    };
  },
  watch: {
    "$store.state.cart"() {
      const products_from_cart = this.$store.state.cart;
      this.products_from_cart = products_from_cart;
      this.products_count = products_from_cart.length;
      this.total = calcTotal(products_from_cart).toFixed(2);
      this.sale = calcSale(products_from_cart).toFixed(2);
      this.subtotal = +(this.total - this.sale).toFixed(2);
    },
  },
  methods: {
    ...mapActions(["getProductFromCart", "removeAllProductFromCart"]),

    removeAll() {
      this.removeAllProductFromCart();
    },
  },
  async mounted() {
    this.getProductFromCart();
  },
  components: {
    Card,
  },
};
</script>

<style></style>

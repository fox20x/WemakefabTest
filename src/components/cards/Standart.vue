<template>
  <div class="card">
    <img :src="picture" class="card__image" />
    <div class="card__sale" v-if="sale">
      <span class="m_16">Sale {{ sale }}%</span>
    </div>
    <div class="card__name">
      <span class="r_16">{{ name }}</span>
    </div>
    <div class="card__price">
      <span class="sb_16">{{ currency }}{{ cost.current }}</span>
      <span class="sb_16 card__price-prev" v-if="cost.previous"
        >${{ cost.previous }}</span
      >
    </div>
    <button
      class="button button_catalog card__button"
      :class="{ button_catalog_added: in_cart }"
      @click="setToCart"
    >
      <span>Add to basket</span>
      <i class="icon"></i>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    id: { type: Number },
    name: { type: String, default: "Name" },
    picture: { type: String, default: "Picture" },
    currency: { type: String, default: "$" },
    sale: { type: Number, default: 0 },

    cost: { type: Object, default: () => ({ current: 0, previous: 0 }) },
  },
  data() {
    return {
      in_cart: false,
    };
  },
  watch: {
    "$store.state.cart"() {
      this.findToCart();
    },
  },
  methods: {
    ...mapActions(["setProductToCart"]),
    findToCart() {
      const products_from_cart = this.$store.state.cart;

      this.in_cart = Boolean(products_from_cart.find((p) => p.id == this.id));
    },
    setToCart() {
      this.setProductToCart({
        id: this.id,
        name: this.name,
        picture: this.picture,
        cost: this.cost,
      });
    },
  },
  mounted() {
    this.findToCart();
  },
};
</script>

<style></style>

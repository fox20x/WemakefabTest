<template>
  <div class="card card_cart">
    <img :src="picture" class="card__image" />
    <div class="card__info">
      <div class="card__name-and-price">
        <p class="r_16 name">{{ name }}</p>
        <span class="m_16 price">${{ cost.current }}</span>
        <!-- <span class="m_16 price-prev">$49.99</span> -->
      </div>
      <button class="card__remove" @click="remove">
        <span class="r_16 text_underline">Remove</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    id: { type: Number },
    name: { type: String, default: "Name" },
    picture: { type: String, default: "Picture" },
    cost: { type: Object, default: () => ({ current: 0, previous: 0 }) },
  },
  methods: {
    ...mapActions(["removeProductFromCart"]),
    remove() {
      this.removeProductFromCart(this.id);
    },
  },
};
</script>

<style></style>

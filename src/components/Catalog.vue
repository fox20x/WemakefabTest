<template>
  <div class="catalog">
    <div class="grid-container catalog__container">
      <div class="grid-item catalog__item catalog__item_empty">
        <p class="b_40 text_uppercase">Bestsellers:</p>
        <p class="b_40">{{ products.length }}</p>
      </div>

      <div
        v-for="(product, i) in products"
        :key="i"
        class="grid-item catalog__item"
        :class="{ catalog__item_big: i == 2 }"
      >
        <card
          :class="{ card_big: i == 2 }"
          :id="product.id"
          :name="product.name"
          :picture="product.picture"
          :currency="product.currency"
          :sale="product.sale"
          :cost="product.cost"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/cards/Standart.vue";

export default {
  props: {
    products: { type: Array, default: () => [] },
  },
  components: {
    Card,
  },
};
</script>

<style></style>

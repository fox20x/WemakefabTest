<template>
  <main class="main">
    <component-filter />

    <div class="catalog">
      <div class="grid-container catalog__container">
        <div class="grid-item catalog-item catalog-item_empty">
          <p class="b_40 text_uppercase">Bestsellers:</p>
          <p class="b_40">34</p>
        </div>
        <div class="grid-item catalog-item catalog-item_empty"></div>
        <div class="grid-item catalog-item catalog-item_big">
          <card class="card_big" />
        </div>
        <div class="grid-item catalog-item">
          <card />
        </div>
        <div class="grid-item catalog-item">
          <card />
        </div>
        <div class="grid-item catalog-item">
          <card />
        </div>
        <div class="grid-item catalog-item">
          <card />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Filter from "../components/Filter.vue";
import Card from "../components/cards/Standart.vue";

export default {
  components: {
    "component-filter": Filter,
    Card,
  },
};
</script>

<style></style>

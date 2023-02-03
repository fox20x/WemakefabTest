<template>
  <div class="filter">
    <div class="grid-container filter__container">
      <div class="grid-item filter__item">
        <input-text :label="'Search'" v-model="filter.search" />
      </div>
      <div class="grid-item filter__item">
        <input-select
          :label="'Product category'"
          v-model="filter.category"
          :options="category_options"
        />
      </div>
      <div class="grid-item filter__item">
        <input-select
          :label="'Sale'"
          v-model="filter.sale"
          :options="sale_options"
        />
      </div>
      <div
        class="grid-item filter__item filter__item_button"
        @click="filterAll"
      >
        <button class="button filter__button">Apply</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

type ProductId = number;

interface Product {
  id: ProductId;
  name: string;
  picture: string;
  price: number;
  currency: string;
  sale: number;
  category: Array<string>;
}

export default Vue.extend({
  props: {
    products: { type: Array as PropType<Array<Product>>, default: () => [] },
  },
  data() {
    return {
      filter: {
        search: "",
        category: "",
        sale: "",
      },

      category_options: [],
      sale_options: ["Bestsellers", "Discount"],
    };
  },
  methods: {
    filterSearch(products: Array<Product>): Array<ProductId> {
      const search_text = this.filter.search;
      if (!search_text) return products.map((p) => p.id);

      const regex = new RegExp(search_text.toUpperCase());

      return products
        .filter((p) => {
          const product_name = p.name.toUpperCase();

          return regex.test(product_name);
        })
        .map((p) => p.id);
    },
    filterCategory() {},
    filterSale() {},
    filterAll() {
      const products = this.products;
      console.log(this.filterSearch(products));
    },
  },
});
</script>

<style></style>

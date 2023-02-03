<template>
  <main class="main" :key="products.length">
    <component-filter :products="products" @filter="filter" />

    <component-catalog :products="products_filtered" />
  </main>
</template>

<script>
import { mapActions } from "vuex";
import _ from "lodash";

import Filter from "@/components/Filter.vue";
import Catalog from "../components/Catalog.vue";

export default {
  data() {
    return {
      products: [],
      products_filtered: [],
    };
  },
  methods: {
    ...mapActions(["getProducts"]),
    async productsLoad() {
      const result = await this.getProducts();
      if (result.ok) {
        this.products = result.data;
        this.products_filtered = _.cloneDeep(result.data);
      }
    },
    filter(product_ids) {
      this.products_filtered = product_ids.map((id) => {
        return this.products.find((p) => p.id == id);
      });
    },
  },
  async mounted() {
    await this.productsLoad();
  },
  components: {
    "component-filter": Filter,
    "component-catalog": Catalog,
  },
};
</script>

<style></style>

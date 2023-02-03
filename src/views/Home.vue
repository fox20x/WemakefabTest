<template>
  <main class="main">
    <component-filter :products="products" @filter="filter" />

    <component-catalog :products="products" />
  </main>
</template>

<script>
import { mapActions } from "vuex";

import Filter from "@/components/Filter.vue";
import Catalog from "../components/Catalog.vue";

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    ...mapActions(["getProducts"]),
    filter() {
      return "";
    },
    async productsLoad() {
      const result = await this.getProducts();
      if (result.ok) {
        this.products = result.data;
      }
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

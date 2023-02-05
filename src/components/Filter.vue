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
import _ from "lodash";

type ProductId = number;

interface Cost {
  current: number;
  previous: number;
}

interface Product {
  id: ProductId;
  name: string;
  picture: string;
  price: number;
  currency: string;
  sale: number;
  cost: Cost;
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

      category_options: [""],
      sale_options: ["Bestsellers", "Discount"],
    };
  },
  methods: {
    filterInit(): void {
      const products = this.products;
      const products_category = products
        .map((p) => p.category)
        .filter((p) => p)
        .flat();

      this.category_options = Array.from(new Set(products_category));
    },

    filterAll(): void {
      const products = _.cloneDeep(this.products);

      const products_sale = this.filterSale(products);

      const filtered_search: Array<ProductId> =
        this.filterSearch(products_sale);
      const filtered_category: Array<ProductId> =
        this.filterCategory(products_sale);

      const filtered: Array<ProductId> = _.intersectionWith(
        filtered_search,
        filtered_category
      );

      this.$emit("filter", filtered);
    },
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
    filterCategory(products: Array<Product>): Array<ProductId> {
      const category = this.filter.category;
      if (!category) return products.map((p) => p.id);

      return products
        .filter((p) => {
          const product_category = p?.category || [];
          return product_category.includes(category);
        })
        .map((p) => p.id);
    },
    filterSale(products: Array<Product>): Array<Product> {
      const sale_type = this.filter.sale;

      if (sale_type == "Bestsellers") {
        return products;
      }

      if (sale_type == "Discount") {
        return products.sort((first, second) => {
          return second.cost.current - first.cost.current;
        });
      }

      return products;
    },
  },
  mounted() {
    this.filterInit();
  },
});
</script>

<style></style>

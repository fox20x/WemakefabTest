<template>
  <header class="header">
    <div class="grid-container header__container">
      <div class="grid-item header__item">
        <div class="header__logo">
          <span class="sb_24">S—Shop</span>
        </div>
      </div>

      <div class="grid-item header__item">
        <div class="header__catalog">
          <span class="m_18 text_orange">Catalog</span>
        </div>
      </div>

      <div class="grid-item header__item"></div>

      <div class="grid-item header__item">
        <div class="header__profile-cart">
          <span class="r_18">Profile</span>
          <span class="r_18" data-modal_id="modal_cart"
            >Basket({{ products_count }})</span
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      products_count: 0,
    };
  },
  watch: {
    "$store.state.cart"() {
      this.products_count = this.$store.state.cart.length;
    },
  },
};
</script>

<style></style>

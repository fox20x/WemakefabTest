<template>
  <div class="modal" id="modal_cart">
    <div class="modal__close"></div>
    <cart class="modal__cart" />
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";

export default {
  components: {
    Cart,
  },
};
</script>

<style></style>

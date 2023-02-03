<template>
  <div class="modal" id="modal_cart">
    <div class="modal__close"></div>
    <div class="cart modal__cart">
      <div class="cart__block cart__block_header">
        <span class="r_18">Profile</span>
        <span class="r_18 text_orange">Basket(2)</span>
      </div>
      <div class="cart__block cart__block_info">
        <p class="b_24 text_uppercase title">Total</p>
        <ul class="list">
          <li class="item">
            <span class="r_16">Subtotal:</span>
            <span class="m_16">$99.99</span>
          </li>
          <li class="item">
            <span class="r_16">Sale:</span>
            <span class="m_16">$34.00</span>
          </li>
          <li class="item">
            <span class="r_16">Content:</span>
            <button class="m_16 text_underline">Remove all</button>
          </li>
        </ul>
      </div>
      <div class="cart__block cart__block_total">
        <span class="m_20">Order Total:</span>
        <span class="m_20">$135.99</span>
      </div>
      <div class="cart__block cart__block_preview">
        <div class="card card_cart">
          <img src="@/assets/img/catalog/Converse_Kids_70.png" class="card__image">
          <div class="card__info">
            <div class="card__name-and-price">
              <p class="r_16 name">Converse Kids 70</p>
              <span class="m_16 price">$49.99</span>
              <span class="m_16 price-prev">$49.99</span>
            </div>
            <button class="card__remove">
              <span class="r_16 text_underline">Remove</span>
            </button>
          </div>
        </div>
      </div>
      <button class="cart__block cart__block_checkout">
        <span class="m_20">Checkout</span>
        <i class="icon arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
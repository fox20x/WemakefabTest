export default {
  actions: {
    async setProductToCart(
      { dispatch }: { dispatch: Function },
      product: CartItem
    ) {
      const storage = await dispatch("getStorage");
      const cart: Cart = storage.cart;
      let cart_new = [];

      const is_product = cart.find((p) => p.id == product.id);

      if (is_product) {
        cart_new = cart.filter((p) => p.id != product.id);
      } else {
        cart_new = cart.concat(product);
      }

      // console.log("cart_new: ", cart_new);

      dispatch("setStorage", { cart: cart_new });
    },

    async getProductFromCart({
      dispatch,
      commit,
    }: {
      dispatch: Function;
      commit: Function;
    }) {
      const storage = await dispatch("getStorage");
      const cart: Cart = storage.cart;
      commit("setCart", cart, { root: true });
      return cart;
    },

    async removeProductFromCart(
      { dispatch, commit }: { dispatch: Function; commit: Function },
      id: ProductId
    ) {
      const storage = await dispatch("getStorage");
      const cart: Cart = storage.cart?.filter((p: CartItem) => p.id != id);
      commit("setCart", cart, { root: true });
      dispatch("setStorage", { cart });
      return cart;
    },

    async removeAllProductFromCart({
      dispatch,
      commit,
    }: {
      dispatch: Function;
      commit: Function;
    }) {
      commit("setCart", [], { root: true });
      dispatch("setStorage", { cart: [] });
      return [];
    },
  },
};

export default {
  actions: {
    async setProductToCart({ dispatch }, product) {
      const storage = await dispatch("getStorage");
      const cart = storage.cart;
      let cart_new = [];

      const is_product = cart.find((p) => p.id == product.id);

      if (is_product) {
        cart_new = cart.filter((p) => p.id != product.id);
      } else {
        cart_new = cart.concat(product);
      }

      console.log("cart_new: ", cart_new);

      dispatch("setStorage", { cart: cart_new });
    },

    async getProductFromCart({ dispatch, commit }) {
      const storage = await dispatch("getStorage");
      const cart = storage.cart;
      commit("setCart", cart, { root: true });
      return cart;
    },

    async removeProductFromCart({ dispatch, commit }, id) {
      const storage = await dispatch("getStorage");
      const cart = storage.cart?.filter((p) => p.id != id);
      commit("setCart", cart, { root: true });
      dispatch("setStorage", { cart });
      return cart;
    },

    async removeAllProductFromCart({ dispatch, commit }) {
      commit("setCart", [], { root: true });
      dispatch("setStorage", { cart: [] });
      return [];
    },
  },
};

import Vue from "vue";
import Vuex from "vuex";

import Products from "./products";
import Cart from "./cart";

Vue.use(Vuex);

interface State {
  storage_key: string;
  cart: Cart;
}

const default_state: State = {
  storage_key: "TestAppStorage",
  cart: [],
};

export default new Vuex.Store({
  state: default_state,
  mutations: {
    setCart(state, cart) {
      state.cart = cart;
    },
  },
  actions: {
    getStorage({ state }): State {
      const defaultJSON = '{"cart":[]}';
      const storage = localStorage.getItem(state.storage_key);
      const data = JSON.parse(storage || defaultJSON);
      return data;
    },
    setStorage({ state, dispatch, commit }, { cart }): void {
      const data: any = dispatch("getStorage");

      if (cart) {
        data.cart = cart;
        commit("setCart", cart);
      }

      localStorage.removeItem(state.storage_key);
      localStorage.setItem(state.storage_key, JSON.stringify(data));
    },
  },
  modules: {
    Products,
    Cart,
  },
});

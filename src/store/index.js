import Vue from "vue";
import Vuex from "vuex";

import Products from "./products.js";
import Cart from "./cart.js";

Vue.use(Vuex);

const default_state = {
  storage_key: "TestAppStorage",
  cart: [], // { name: string, cost: object }
};

export default new Vuex.Store({
  state: {
    ...default_state,
  },
  mutations: {
    setCart(state, cart) {
      state.cart = cart;
    },
  },
  actions: {
    getStorage({ state }) {
      const defaultJSON = '{"cart":[]}';
      const storage = localStorage.getItem(state.storage_key);
      const data = JSON.parse(storage || defaultJSON);
      return data;
    },
    setStorage({ state, dispatch, commit }, { cart }) {
      const data = dispatch("getStorage");

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

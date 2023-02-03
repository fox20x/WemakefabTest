import axios from "axios";

export default {
  actions: {
    async getProducts() {
      try {
        const response = await axios.get("/data.json");
        return { ok: true, data: response.data };
      } catch (e) {
        console.log(e);
        return { ok: false, data: [] };
      }
    },
  },
};

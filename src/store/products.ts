import axios from "axios";

function calcCurrentPrice(price: number, sale: number): Cost {
  if (!price && !sale) return { current: 0, previous: 0 };

  const sale_boolean: boolean = Boolean(sale);

  if (!sale_boolean) {
    return { current: price, previous: 0 };
  }

  const sale_percent: number = price * (sale / 100);
  const current: number = price + sale_percent;

  return { current: +current.toFixed(2), previous: price };
}

function productsHandler(products: Array<Product>): Array<Product> {
  return products.map((p) => ({
    ...p,
    cost: calcCurrentPrice(p.price, p.sale),
  }));
}

export default {
  actions: {
    async getProducts() {
      try {
        const response = await axios.get("/data.json");
        const data = productsHandler(response.data);
        return { ok: true, data };
      } catch (e) {
        console.log(e);
        return { ok: false, data: [] };
      }
    },
  },
};

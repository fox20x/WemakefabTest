import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

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

  interface CartItem {
    id: number;
    name: string;
    picture: string;
    cost: Cost;
  }

  type Cart = Array<CartItem>;
}

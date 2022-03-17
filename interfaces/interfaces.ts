import {Product} from "../product/types";

export interface ICartProduct extends Product {
  qty: number;
  inCartId: string;
  selectedSize: string;
}

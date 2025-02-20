import { Product } from "./product";
export class Apple implements Product {
  id: number = 1;
  offerQuantiy?: number = 2;
  offerPrice?: number = 45;
  price: number = 30;

  updatePrice(newPrice: number) {
    this.price = newPrice;
  }
}

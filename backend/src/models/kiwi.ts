import { Product } from "./product";
export class Kiwi implements Product {
  id: number = 4;
  name: string = "Kiwi";
  offerQuantiy?: number | undefined;
  offerPrice?: number | undefined;
  price: number = 20;
  updatePrice(newPrice: number): void {
    throw new Error("Method not implemented.");
  }
}

import { Product } from "./product";
export class Peach implements Product {
  id: number = 3;
  name: string = "Peach";
  offerQuantiy?: number | undefined;
  offerPrice?: number | undefined;
  price: number = 60;
  updatePrice(newPrice: number): void {
    throw new Error("Method not implemented.");
  }
}

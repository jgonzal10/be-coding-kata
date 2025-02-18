import {Product} from "./product"
export class Banana implements Product{
    id: number=2;
    name: string = "Banana";
    offerQuantiy?: number =3;
    offerPrice?: number = 130;
    price: number = 50;
    updatePrice(newPrice: number): void {
        throw new Error("Method not implemented.");
    }
}
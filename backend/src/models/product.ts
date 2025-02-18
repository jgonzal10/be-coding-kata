export interface Product {
    id:number;
    offerQuantiy?:number;
    offerPrice?:number;
    price:number
    updatePrice(newPrice:number):void;
}
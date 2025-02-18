import { ProductQuantity } from "../models/productQuantity";

export const calculateProductsQuantity = (productList:ProductQuantity[]):Map<number,number>=>{
    const productQuantity = new Map<number,number>();
    for(const product of productList){
        if(productQuantity.has(product.productId)){
            productQuantity.set(product.productId, productQuantity.get(product.productId)! + product.productQuantity);
        }else{
            productQuantity.set(product.productId,product.productQuantity)
        }
    }
    return productQuantity;
}
import { Apple } from "../models/apple";
import { Banana } from "../models/banana";
import { Kiwi } from "../models/kiwi";
import { Peach } from "../models/peach";
import { ProductQuantity } from "../models/productQuantity";

export const calculateProductsQuantity = (productList: ProductQuantity[]) => {
  const productQuantity = new Map<number, number>();
  for (const product of productList) {
    if (productQuantity.has(product.productId)) {
      productQuantity.set(
        product.productId,
        productQuantity.get(product.productId)! + product.productQuantity,
      );
    } else {
      productQuantity.set(product.productId, product.productQuantity);
    }
  }
  const result = [];
  for (let product of productQuantity.keys()) {
    switch (product) {
      case 1:
        result.push({
          product: new Apple(),
          quantity: productQuantity.get(product),
        });
        break;
      case 2:
        result.push({
          product: new Banana(),
          quantity: productQuantity.get(product),
        });
        break;
      case 3:
        result.push({
          product: new Peach(),
          quantity: productQuantity.get(product),
        });
        break;
      case 4:
        result.push({
          product: new Kiwi(),
          quantity: productQuantity.get(product),
        });
        break;
    }
  }
  return result;
};

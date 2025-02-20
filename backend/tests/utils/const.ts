import { Apple } from "../../src/models/apple";
import { Banana } from "../../src/models/banana";
import { Kiwi } from "../../src/models/kiwi";
import { Peach } from "../../src/models/peach";
import { ProductQuantity } from "../../src/models/productQuantity";

export const specialApple = new Apple();
export const greenBanana = new Banana();
export const yellowKiwi = new Kiwi();
export const goldPeach = new Peach();

/**
 * codes:
 * Apple =1
 * Banana =2
 * Peach = 3
 * Kiwi = 4
 */
export const productListMultipleApple: ProductQuantity[] = [
  { productId: 1, productQuantity: 2 },
  { productId: 2, productQuantity: 2 },
  { productId: 1, productQuantity: 2 },
];
export const productListMultipleBanana: ProductQuantity[] = [
  { productId: 2, productQuantity: 2 },
  { productId: 2, productQuantity: 3 },
  { productId: 1, productQuantity: 2 },
];
export const productListMultipleKiwi: ProductQuantity[] = [
  { productId: 1, productQuantity: 2 },
  { productId: 4, productQuantity: 5 },
  { productId: 4, productQuantity: 2 },
];

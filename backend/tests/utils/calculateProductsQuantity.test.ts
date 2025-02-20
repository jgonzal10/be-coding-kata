import { describe, expect } from "@jest/globals";
import { calculateProductsQuantity } from "../../src/utils/calculateProductsQuantity";
import {
  productListMultipleApple,
  productListMultipleBanana,
  productListMultipleKiwi,
} from "./const";
import { Apple } from "../../src/models/apple";
import { Banana } from "../../src/models/banana";
import { Kiwi } from "../../src/models/kiwi";
describe("should calculate the quantity of different products ordered", () => {
  it("return total quantity of apples from the list", () => {
    const result = calculateProductsQuantity(productListMultipleApple);
    const applesQuantity = result.find((prod) => prod.product instanceof Apple);
    expect(applesQuantity?.quantity).toEqual(4);
  });

  it("return total quantity of bananas from the list", () => {
    const result = calculateProductsQuantity(productListMultipleBanana);
    const bananasQuantity = result.find(
      (prod) => prod.product instanceof Banana,
    );
    expect(bananasQuantity?.quantity).toEqual(5);
  });

  it("return total quantity of kiwi from the list", () => {
    const result = calculateProductsQuantity(productListMultipleKiwi);
    const kiwisQuantity = result.find((prod) => prod.product instanceof Kiwi);
    expect(kiwisQuantity?.quantity).toEqual(7);
  });
});

import { Product } from "../models/product";

export const calculateTotalPricePerProduct = (
  productQuantity: number,
  product: Product,
): number => {
  let isProductQuantiyDiscountable = false;
  const productPriceWithoutDiscount = productQuantity * product.price;

  if (product.offerQuantiy! && product.offerPrice!) {
    // Checking if the product has a offer
    isProductQuantiyDiscountable = productQuantity % product.offerQuantiy === 0;
    const productToDiscount = productQuantity / product.offerQuantiy;
    if (isProductQuantiyDiscountable) {
      return productToDiscount * product.offerPrice;
    } else {
      if (productToDiscount < 1) {
        return productPriceWithoutDiscount;
      } else {
        return (
          Math.trunc(productToDiscount) * product.offerPrice + product.price
        );
      }
    }
  } else {
    return productPriceWithoutDiscount;
  }
};

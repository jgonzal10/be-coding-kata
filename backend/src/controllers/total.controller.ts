import { NextFunction, Request, Response } from "express";
import { ProductQuantity } from "../models/productQuantity";
import { calculateProductsQuantity } from "../utils/calculateProductsQuantity";
import { calculateTotalPricePerProduct } from "../utils/calculateTotalPricePerProduct";
import { logger } from "../utils/logger";

export const getTotal = (req: Request, res: Response, next: NextFunction) => {
  try {
    let total = 0;
    const products: ProductQuantity[] = req.body.products;
    if(products && products.length !== 0){
      const quantityPerProduct = calculateProductsQuantity(products);

      quantityPerProduct.forEach((prod) => {
        total =
          total + calculateTotalPricePerProduct(prod.quantity!, prod.product);
      });
      logger.info("Successfully total calculated");
      res.status(200).json({ total });
    }else{
      logger.warn("No products to calculate");
      res.status(200).json({ total:0 });
    }

  } catch (error) {
    next(error);
  }
};

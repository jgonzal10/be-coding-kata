import { NextFunction, Request, Response } from "express";
import { ProductQuantity } from "../models/productQuantity";
import { calculateProductsQuantity } from "../utils/calculateProductsQuantity";
import { calculateTotalPricePerProduct } from "../utils/calculateTotalPricePerProduct";

export const getTotal = (req: Request, res: Response, next: NextFunction) => {
    try {
      let total=0;
      const products: ProductQuantity[] = req.body.products;
      const quantityPerProduct = calculateProductsQuantity(products)

      quantityPerProduct.forEach((prod)=>{
        total= total + calculateTotalPricePerProduct(prod.quantity!,prod.product)
      })

        res.status(200).json({ total });
      } catch (error) {
        next(error);
      }
}
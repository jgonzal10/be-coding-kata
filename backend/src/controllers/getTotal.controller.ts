import { NextFunction, Request, Response } from "express";

export const getTotal = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({ total:1000 });
      } catch (error) {
        next(error);
      }
}
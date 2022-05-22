import {Request, Response, NextFunction} from 'express';
import Product from '../models/Product'
import productService from '../services/product';

export const allProducts = async(req: Request, res: Response, next: NextFunction) => {
   try {
  res.json(await productService.getAll())
   } catch (error) {
     res.status(404).send(error)
   }
}
export const getProduct = async(req: Request, res: Response, next: NextFunction) => {
    res.send("Get Product");
}


export const createProduct = async(req: Request, res: Response, next: NextFunction) => {
 const {title, price,description, image, category, buyerInformation} = req.body

  const product = new Product({
    title,
    price,
    description,
    image,
    category,
  	buyerInformation
  });

  try {
        await productService.create(product);
         res.status(200).json(product);
  }
  catch (err) {
    res.status(404).send(err);
  }

}

export const updateProduct = async(req: Request, res: Response, next: NextFunction) => {
    res.send("Update Product");
}

export const deleteProduct = async(req: Request, res: Response, next: NextFunction) => {
    res.send("Delete Product");
}



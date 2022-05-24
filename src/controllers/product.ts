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
  try {
  const product = await productService.getOne(req.params.id)
  if(product){
    res.json(product)
  }
  else{
    res.status(404).send(`Product with id: ${req.params.id} not found`)
  }
  } catch (error) {
    res.status(400).send(error)
  }
}

export const getProductsBySearch = async(req: Request, res: Response, next: NextFunction) => {
  console.log(req.query)
  const {name, category} = req.query
  // res.send(`Products with search: ${req.query}`)
  // 
console.log('name' ,name?.toString());

  
  try {
   const products = await productService.getProductListBySearch(name)
   //     const products = await Product.find({name: 'Winter'})
     return res.json(products)
    // }
    // if(description){
    //   const products = await productService.getProductListBySearch(description)
    //  return res.json(products)
    // }
    // if(category){
    //   const products = await productService.getProductListBySearch(category)
    //   return res.json(products)
    // }  
    // res.send('Nothing found')
  } catch (error) {
    res.status(400).send(error)
  }
}

export const createProduct = async(req: Request, res: Response, next: NextFunction) => {
 const {name, price,description, image, category, buyerInformation} = req.body

  const product = new Product({
    name,
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
try {
   res.json(await productService.updateProd(req.params.id, req.body))
  
} catch (error) {
  res.status(404).send(error)
  
}
}

export const deleteProduct = async(req: Request, res: Response, next: NextFunction) => {
   try {
   await  productService.deleteProd(req.params.id);
    res.status(200).json({message: "Product deleted"})
   } catch (error) {
     res.status(404).send(error)
   
   }
}



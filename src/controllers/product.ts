import {Request, Response, NextFunction} from 'express';

export const allProducts = async(req: Request, res: Response, next: NextFunction) => {
    res.send("All Products");
}
export const getProduct = async(req: Request, res: Response, next: NextFunction) => {
    res.send("Get Product");
}


export const createProduct = async(req: Request, res: Response, next: NextFunction) => {
    res.send("Create Product");
}

export const updateProduct = async(req: Request, res: Response, next: NextFunction) => {
    res.send("Update Product");
}

export const deleteProduct = async(req: Request, res: Response, next: NextFunction) => {
    res.send("Delete Product");
}



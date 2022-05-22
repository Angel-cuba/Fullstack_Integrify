import { IProduct } from "../types/product.type";
import  Product  from "../models/Product";

const create = async (product: IProduct): Promise<IProduct> => {
  return product.save();
};

const getAll = async (): Promise<IProduct[]> => {
  return Product.find();
} 

const getOne = async (productId: string): Promise<IProduct | null> => {
  return Product.findById(productId);
}

const updateProd = async (productId: string, product: IProduct): Promise<IProduct | null> => {
  return Product.findByIdAndUpdate(productId, product, { new: true });
}

const deleteProd = async (productId: string) => {
  return Product.findByIdAndDelete(productId);
}


export default {
  create,
  getAll,
  getOne,
  updateProd,
  deleteProd
}
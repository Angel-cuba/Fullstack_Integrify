import { IProduct } from "../types/product.type";
import  Product  from "../models/Product";

const create = async (product: IProduct): Promise<IProduct> => {
  return product.save();
};

const getAll = async (): Promise<IProduct[]> => {
  return Product.find();
} 


export default {
  create,
  getAll,
}
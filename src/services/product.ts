import { IProduct } from "../types/product.type";
import  Product  from "../models/Product";

const create = async (product: IProduct): Promise<IProduct> => {
  return product.save();
};

const getAll = async (): Promise<IProduct[]> => {
  return Product.find();
} 

//Searching with query parameters
/** By Name */
const getProductListByName = async (search: any): Promise<IProduct[]> => {
  return Product.aggregate([
                      {
                      $match: {name: search }
                      }
                 ] ).sort({ createdAt: -1 });
}
/**By Category */
const getProductListByCategory = async (search: any): Promise<IProduct[]> => {
  return Product.aggregate([
  {
   $match: {category: search}
  }
  ]).sort({ createdAt: -1 });
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
  getProductListByName,
  getProductListByCategory,
  getOne,
  updateProd,
  deleteProd
}
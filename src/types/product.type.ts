import { Document} from "mongoose";

export type IProduct = Document &{
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity?: number;
  buyerInformation: string;
}
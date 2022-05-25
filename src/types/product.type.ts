import { Document} from "mongoose";

export type IProduct = Document &{
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity?: number;
}

type MatchByName = {
  name: string;
};
type MatchByCategory = {
  category: string;
};
export type PiplineMatchStage = {
  $match: MatchByName | MatchByCategory;
};
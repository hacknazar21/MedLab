import { ICategories } from "./ICategories";

export interface IChildCategories {
  id: string;
  title: string;
  createdat: string;
  updatedat: string;
  parent: ICategories[];
}

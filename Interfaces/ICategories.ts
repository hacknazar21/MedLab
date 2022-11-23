import { IChildCategories } from "./IChildCategories";

export interface ICategories {
  count: number;
  next: string;
  previous: string;
  results: {
    id: string;
    child_categories: IChildCategories[];
    title: string;
    createdat: string;
    updatedat: string;
  }[];
}

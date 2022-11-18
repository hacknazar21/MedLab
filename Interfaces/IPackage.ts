import { IAnalys } from "./IAnalys";

export interface IPackage {
  id: string;
  package: IAnalys[];
  name_of_package: string;
  price_of_package: number;
  link: string;
  main_img: string;
  createdat: string;
  updatedat: string;
  terms_of_analyzes: string;
  description: string;
}

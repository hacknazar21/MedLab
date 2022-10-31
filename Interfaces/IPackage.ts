import { IAnalys } from "./IAnalys";

export interface IPackage {
  id: string;
  package: IAnalys[];
  name_of_package: string;
  price_of_package: number;
}

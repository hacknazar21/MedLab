import { IBiomaterial } from "./IBiomaterial";
import { ICategory } from "./ICategory";

export interface IAnalys {
  id: string;
  category: ICategory;
  terms_of_analyzes: {
    id: string;
    title: string;
    createdat: string;
    updatedat: string;
  };
  biomaterial: IBiomaterial;
  banner_images: string[];
  link: string;
  title: string;
  long_title: string;
  is_unique: boolean;
  research_id: string;
  price: number;
  preparation_doctor: string;
  document_img: string;
  main_img: string;
  description_patient: string;
  preparation_patient: string;
  description_doctor: string;
  createdat: string;
  updatedat: string;
  vendor_code: string;
  hidden?: boolean;
  count: number;
}

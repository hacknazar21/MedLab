import React, { FunctionComponent } from "react";
import PromotionCard from "../common/PromotionCard";
import { IPromotion } from "../../Interfaces/IPromotion";
import Pagination from "../common/Pagination";

interface OwnProps {
  promotions: IPromotion[];
  pageCount: number;
  setter: Function;
}

type Props = OwnProps;

const Promotions: FunctionComponent<Props> = ({
  promotions,
  setter,
  pageCount,
}) => {
  return (
    <section className="page__promotions promotions single-page">
      <div className="promotions__container">
        <div className="promotions__box single-page-box">
          <div className="promotions__items single-page-items single-page-items_number_2">
            {promotions?.map((promotion: IPromotion) => {
              return <PromotionCard key={promotion.id} promotion={promotion} />;
            })}
          </div>
          <Pagination
            pageCount={Math.ceil(pageCount) / 4}
            setter={(data) => {
              setter([...data]);
            }}
            link={"/api/front/promotion/allPromotions?page="}
          />
        </div>
      </div>
    </section>
  );
};

export default Promotions;

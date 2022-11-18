import React, { FunctionComponent } from "react";
import PromotionCard from "../common/PromotionCard";
import { IPromotion } from "../../Interfaces/IPromotion";

interface OwnProps {
  promotions: IPromotion[];
}

type Props = OwnProps;

const Promotions: FunctionComponent<Props> = (props) => {
  return (
    <section className="page__promotions promotions single-page">
      <div className="promotions__container">
        <div className="promotions__box single-page-box">
          <div className="promotions__items single-page-items single-page-items_number_2">
            {props.promotions?.map((promotion: IPromotion) => {
              return <PromotionCard key={promotion.id} promotion={promotion} />;
            })}
          </div>
          <div className="promotions__pagination single-page-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;

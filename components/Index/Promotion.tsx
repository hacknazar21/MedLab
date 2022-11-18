import React, { FunctionComponent } from "react";
import PromotionCard from "../common/PromotionCard";
import { IPromotion } from "../../Interfaces/IPromotion";

interface OwnProps {
  promotions: IPromotion[];
}

type Props = OwnProps;

const Promotion: FunctionComponent<Props> = (props) => {
  return (
    <section className="page__promotion promotion">
      <div className="promotion__container promotion__container_grid">
        {props.promotions?.map((promotion: IPromotion) => {
          return <PromotionCard promotion={promotion} />;
        })}
      </div>
    </section>
  );
};

export default Promotion;

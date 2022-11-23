import React, { FunctionComponent } from "react";
import PromotionCard from "../common/PromotionCard";
import { IPromotion } from "../../Interfaces/IPromotion";

interface OwnProps {
  promotion: IPromotion;
}

type Props = OwnProps;

const Promotion: FunctionComponent<Props> = (props) => {
  return (
    <section className="page__promotion promotion single-record">
      <div className="promotion__container">
        <div className="promotion__box single-record-box">
          <div className="promotion__image single-record-image">
            <img src={props.promotion.image} alt={props.promotion.title} />
          </div>
          <div className="promotion__text single-record-text">
            <p>{props.promotion.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
